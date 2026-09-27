import type { Metadata } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { Vitrina, C, HAZARD } from './vitrina'
import { BIZ, WA_LINK, IG_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Girls House Estética — Centro de estética en Molina',
  description:
    'Centro de estética en Quechereguas 2120, Molina. Maquillaje, cejas, pestañas y faciales con precios claros y hora por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'El local', href: '#el-local' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const SPECS = [
  { k: 'Dirección', v: `${BIZ.address}, ${BIZ.city}` },
  { k: 'Atención', v: 'Con hora, por WhatsApp' },
  { k: 'Quién atiende', v: 'Vale, la dueña — la misma del Instagram' },
  { k: 'Instagram', v: `@${BIZ.instagram} · ${BIZ.instagramFollowers} seguidores` },
  { k: 'Reseñas en Google', v: 'Aún sin reseñas — la ficha recién se está armando' },
]

const PRICES = [
  { name: 'Limpieza facial profunda', price: '$25.000' },
  { name: 'Depilación facial con hilo', price: '$6.000' },
  { name: 'Lifting de pestañas + tinte', price: '$18.000' },
  { name: 'Retoque de lifting (4 semanas)', price: '$10.000' },
  { name: 'Perfilado y diseño de cejas', price: '$8.000', before: '$10.000' },
  { name: 'Maquillaje social', price: '$30.000' },
  { name: 'Pack novia (prueba + día)', price: '$79.000', before: '$95.000' },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.signal : C.ink }}
    >
      <span className="inline-block w-8 h-[3px]" style={{ background: HAZARD }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function GirlsHousePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(23,24,26,0.95)',
          ink: '#FFFFFF',
          line: 'rgba(255,255,255,0.14)',
          btnBg: C.signal,
          btnInk: C.ink,
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.ink }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Sala de atención de Girls House Estética: camilla, lámpara de trabajo y vista a la calle de Molina"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(23,24,26,0.55) 0%, rgba(23,24,26,0.18) 42%, rgba(23,24,26,0.88) 100%)',
          }}
        />
        {/* sello de Instagram */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 shadow-lg"
              style={{ backgroundColor: C.signal, color: C.ink }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
              {BIZ.instagramFollowers} seguidores en Instagram
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Centro de estética · Molina · Maule</Eyebrow>
            <h1
              className={`${display.className} font-extrabold leading-[0.98] tracking-[-0.02em] text-[clamp(2.9rem,10vw,6.4rem)] mb-6 uppercase`}
              style={{ color: '#FFFFFF' }}
            >
              Trabajo fino,
              <br />
              <span style={{ color: C.signal }}>precio claro.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Maquillaje, cejas, pestañas y faciales en {BIZ.address},
              {BIZ.city}. Cada servicio con su ficha: qué incluye, cuánto
              dura y qué vale. Sin letra chica.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 transition-transform active:scale-95 uppercase tracking-wide`}
                style={{ backgroundColor: C.signal, color: C.ink }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#vitrina"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 border-2 transition-colors hover:bg-white/10 uppercase tracking-wide`}
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#FFFFFF' }}
              >
                Ver la vitrina
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative" style={{ background: HAZARD, height: '4px' }} aria-hidden="true" />
        <div className="relative" style={{ backgroundColor: 'rgba(23,24,26,0.75)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(255,255,255,0.75)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span>@{BIZ.instagram}</span>
            <span>Agenda directa por WhatsApp</span>
            <span className="hidden md:inline" style={{ color: C.signal }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── La vitrina ── */}
      <section id="vitrina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>La vitrina</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8 md:mb-10">
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[1.0] tracking-[-0.01em]`} style={{ color: C.ink }}>
              Servicios, como
              <br />
              en la vitrina
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.steel }}>
              Cada servicio con su código, su duración y su precio. Los
              valores son de muestra: al publicar van los precios reales
              del centro.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <Vitrina fontClass={display.className} />
        </Reveal>
      </section>

      {/* ── Ficha del local ── */}
      <section id="el-local" className="scroll-mt-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden border" style={{ borderColor: C.line }}>
                <img
                  src={`${IMG}/ambiente.webp`}
                  alt="Fachada de Girls House Estética en Quechereguas, Molina: vitrina encendida al atardecer"
                  loading="lazy"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              <div
                className="absolute -bottom-3 left-4 md:left-6 text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-2"
                style={{ background: HAZARD, color: C.signal, textShadow: '0 1px 0 #17181A' }}
              >
                Quechereguas 2120
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>El local</Eyebrow>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: C.ink }}>
              Atención directa,
              <br />
              <span style={{ color: C.steel }}>sin intermediarios</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.steel }}>
              Girls House Estética es el centro de Vale en pleno Molina:
              la misma persona que responde el WhatsApp es la que te
              atiende. El trabajo se muestra tal cual en
              @{BIZ.instagram}, donde ya la siguen {BIZ.instagramFollowers}
              personas.
            </p>
            <dl className="border-t" style={{ borderColor: C.line }}>
              {SPECS.map((s) => (
                <div
                  key={s.k}
                  className="flex items-baseline justify-between gap-4 py-3 border-b border-dashed"
                  style={{ borderColor: C.line }}
                >
                  <dt className="text-[11px] uppercase tracking-[0.18em] font-semibold shrink-0" style={{ color: C.steel }}>
                    {s.k}
                  </dt>
                  <dd className="text-sm md:text-base font-medium text-right" style={{ color: C.ink }}>
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── Lista de precios ── */}
      <section id="precios" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <Eyebrow light>Lista de precios</Eyebrow>
              <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: '#FFFFFF' }}>
                Todo con
                <br />
                <span style={{ color: C.signal }}>su valor</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm mb-7" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Valores de referencia para este ejemplo. Los precios
                reales, los horarios y las promociones vigentes se
                confirman por WhatsApp.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-block font-bold text-sm px-7 py-3.5 uppercase tracking-wide transition-transform active:scale-95`}
                style={{ backgroundColor: C.signal, color: C.ink }}
              >
                Consultar valor real
              </a>
            </Reveal>
            <Reveal delay={120}>
              <ul className="border-t" style={{ borderColor: 'rgba(255,255,255,0.18)' }}>
                {PRICES.map((p) => (
                  <li
                    key={p.name}
                    className="flex items-baseline gap-3 py-4 border-b border-dashed"
                    style={{ borderColor: 'rgba(255,255,255,0.18)' }}
                  >
                    <span className="text-sm md:text-base font-medium" style={{ color: '#FFFFFF' }}>
                      {p.name}
                    </span>
                    <span className="flex-1 border-b border-dotted translate-y-[-4px]" style={{ borderColor: 'rgba(138,145,153,0.5)' }} aria-hidden="true" />
                    {p.before && (
                      <span className="text-xs line-through" style={{ color: C.steel }}>
                        {p.before}
                      </span>
                    )}
                    <span className={`${display.className} text-xl md:text-2xl font-extrabold`} style={{ color: C.signal }}>
                      {p.price}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[11px] uppercase tracking-[0.18em]" style={{ color: C.steel }}>
                Lista de muestra · confirma valores por WhatsApp
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.signal }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Pedidos y horas</Eyebrow>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-6xl leading-[0.98] mb-6`} style={{ color: C.ink }}>
              Se agenda
              <br />
              por WhatsApp
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(23,24,26,0.75)' }}>
              Escríbenos con el servicio que te interesa y te confirmamos
              hora el mismo día. Si prefieres, ven a conocer el local:
              estamos en {BIZ.address}, {BIZ.city}.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 uppercase tracking-wide transition-transform active:scale-95`}
                style={{ backgroundColor: C.ink, color: C.signal }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 uppercase tracking-wide border-2 transition-colors hover:bg-black/5`}
                style={{ borderColor: C.ink, color: C.ink }}
              >
                @{BIZ.instagram}
              </a>
            </div>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(23,24,26,0.75)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}
            </address>
          </Reveal>
          <Reveal delay={140}>
            <div className="h-full min-h-[320px] border-4" style={{ borderColor: C.ink }}>
              <iframe
                title={`Mapa: ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px] grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#0E0F11', color: '#FFFFFF' }}>
        <div style={{ background: HAZARD, height: '4px' }} aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
          <div>
            <p className={`${display.className} font-extrabold uppercase text-xl mb-1`}>
              {BIZ.name}
            </p>
            <p className="text-xs" style={{ color: C.steel }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs" style={{ color: C.steel }}>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              @{BIZ.instagram}
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Cómo llegar
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {BIZ.phoneDisplay}
            </a>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      <DemoBand name={BIZ.name} />
    </div>
  )
}
