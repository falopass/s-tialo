import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import { Chrome, Reveal } from './chrome'
import { BIZ, C, GALERIA, HOURS, IMG, MAPS_URL, METODOS, PROPUESTA, SELLOS, WA_LINK } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', style: 'italic' },
  ],
  weight: '100 900',
})
const body = localFont({ src: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000' })

export const metadata: Metadata = demoMetadata({
  slug: 'monky-coffee',
  title: 'Monky Coffee · Cafetería de especialidad en Talca',
  description:
    'Café de especialidad, pastelería y talleres en 1 Oriente 1385, Talca. Pet friendly, desde 2014. Escríbenos por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'
const btn = `${body.className} inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-bold tracking-wide transition-transform active:scale-95 ${focusRing} tap-44`

function Eyebrow({ children, color = C.coralDeep }: { children: React.ReactNode; color?: string }) {
  return (
    <p className={`${body.className} mb-3 text-[12px] font-bold uppercase tracking-[0.22em]`} style={{ color }}>
      {children}
    </p>
  )
}

function Photo({ src, alt, className = '', ratio = 'aspect-[4/5]' }: { src: string; alt: string; className?: string; ratio?: string }) {
  return (
    <figure className={`relative overflow-hidden rounded-[20px] ${ratio} ${className}`}>
      <img src={`${IMG}/${src}.webp`} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
    </figure>
  )
}

function Stars() {
  return (
    <span className="inline-flex gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={C.coral}>
          <path d="M12 2.5l2.9 6.2 6.7.8-5 4.6 1.4 6.7L12 17.4l-6 3.4 1.4-6.7-5-4.6 6.7-.8z" />
        </svg>
      ))}
    </span>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <Chrome fontClass={display.className} />

      {/* HERO — foto real de la barra, con logo en la pared */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.green, color: C.paper }}>
        <div className="mx-auto grid max-w-6xl items-stretch md:min-h-[88svh] md:grid-cols-[1.05fr_1fr]">
          <div className="order-2 flex flex-col justify-center px-5 pb-12 pt-8 md:order-1 md:py-24 md:pr-12">
            <div className="mb-5 flex items-center gap-3">
              <img src={`${IMG}/logo.webp`} alt="Logo de Monky Coffee" width={44} height={44} className="h-11 w-11 rounded-full border-2" style={{ borderColor: C.mint }} />
              <p className="text-[12px] font-bold uppercase tracking-[0.22em]" style={{ color: C.mint }}>
                Cafetería de especialidad · Talca
              </p>
            </div>
            <h1 className={`${display.className} text-[clamp(2.5rem,7vw,4.6rem)] font-medium leading-[1.02] tracking-tight`}>
              Personas, café,
              <br />
              plantas y <em className="font-light" style={{ color: C.mint }}>cositas ricas</em>.
            </h1>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed" style={{ color: C.mutedOnDark }}>
              Desde {BIZ.since} en {BIZ.address.split(',')[0]}, {BIZ.city}: espresso, métodos, pastelería de la casa y un
              rincón para juntarse. Con mascotas, bienvenidos.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={btn} style={{ backgroundColor: C.coralDeep, color: '#fff' }}>
                Escribir por WhatsApp
              </a>
              <a href="#cafe" className={`${btn} border`} style={{ borderColor: 'rgba(244,239,229,0.45)', color: C.paper }}>
                Ver el café
              </a>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px]">
              <span className="inline-flex items-center gap-2">
                <Stars />
                <b>{BIZ.rating.toLocaleString('es-CL')}</b>
                <span style={{ color: C.mutedOnDark }}>· {BIZ.reviews} reseñas en Google</span>
              </span>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {SELLOS.map((s) => (
                <li key={s} className="rounded-full border px-3 py-1 text-[12px] font-semibold" style={{ borderColor: C.lineOnDark, color: C.paper }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative order-1 aspect-[4/5] md:order-2 md:aspect-auto">
            <img
              src={`${IMG}/hero.webp`}
              alt="Barra de Monky Coffee con flores frescas, máquina de espresso y el logo del mono en la pared"
              className="absolute inset-0 h-full w-full object-cover object-[50%_35%]"
            />
            <div
              className="absolute inset-0 md:hidden"
              aria-hidden="true"
              style={{ background: `linear-gradient(180deg, rgba(30,74,60,0) 60%, ${C.green} 100%)` }}
            />
          </div>
        </div>
      </section>

      {/* EL CAFÉ — propuesta + galería */}
      <section id="cafe" className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
            <Reveal>
              <Eyebrow>El café</Eyebrow>
              <h2 className={`${display.className} text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.05] tracking-tight`}>
                Grano de origen, <em className="font-light" style={{ color: C.green }}>tostado con calma</em>.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <ol className="grid gap-4 sm:grid-cols-3">
                {PROPUESTA.map((p) => (
                  <li key={p.n} className="rounded-2xl border p-4" style={{ borderColor: C.line, backgroundColor: '#fff' }}>
                    <span className={`${display.className} text-[13px] font-semibold`} style={{ color: C.coralDeep }}>
                      {p.n}
                    </span>
                    <h3 className="mt-1 text-[15px] font-bold">{p.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed" style={{ color: C.muted }}>
                      {p.desc}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {GALERIA.map((g, i) => (
              <Reveal key={g.src} delay={i * 40} className={i === 0 ? 'col-span-2 md:col-span-1 md:row-span-2' : i === 5 ? 'col-span-2' : ''}>
                <Photo src={g.src} alt={g.alt} ratio={i === 0 ? 'aspect-[4/3] md:aspect-auto md:h-full' : i === 5 ? 'aspect-[16/9]' : 'aspect-[4/5]'} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTODOS */}
      <section id="metodos" className="px-5 py-16 md:py-24" style={{ backgroundColor: C.paper2 }}>
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1fr] md:items-center">
          <Reveal>
            <Photo src="cafe-2" alt="Flat white con arte latte en forma de tulipán sobre mesa de madera" ratio="aspect-[4/5] md:aspect-[5/6]" />
          </Reveal>
          <Reveal delay={80}>
            <Eyebrow>Métodos</Eyebrow>
            <h2 className={`${display.className} text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.05] tracking-tight`}>
              El mismo grano, <em className="font-light" style={{ color: C.green }}>tres maneras</em> de tomarlo.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed" style={{ color: C.muted }}>
              Pide el de siempre o deja que el barista te recomiende. También hacemos talleres y catas para aprender a
              prepararlo en casa.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {METODOS.map((m) => (
                <li key={m} className={`${display.className} rounded-full px-4 py-2 text-[16px] font-medium`} style={{ backgroundColor: C.green, color: C.paper }}>
                  {m}
                </li>
              ))}
            </ul>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${btn} mt-7`} style={{ backgroundColor: C.ink, color: C.paper }}>
              Preguntar por talleres
            </a>
          </Reveal>
        </div>
      </section>

      {/* HORARIO + CONTACTO */}
      <section id="horario" className="px-5 py-16 md:py-24" style={{ backgroundColor: C.green, color: C.paper }}>
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1fr]">
          <Reveal>
            <Eyebrow color={C.mint}>Horario</Eyebrow>
            <h2 className={`${display.className} text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.05] tracking-tight`}>
              Abrimos <em className="font-light" style={{ color: C.mint }}>temprano</em>.
            </h2>
            <dl className="mt-6 divide-y" style={{ borderColor: C.lineOnDark }}>
              {HOURS.map((h) => (
                <div key={h.days} className="flex items-baseline justify-between gap-4 py-3" style={{ borderColor: C.lineOnDark }}>
                  <dt className="text-[15px]" style={{ color: C.mutedOnDark }}>
                    {h.days}
                  </dt>
                  <dd className={`${display.className} text-[20px] font-medium`}>{h.time}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={80}>
            <div id="contacto" className="rounded-[24px] p-6 md:p-8" style={{ backgroundColor: C.paper, color: C.ink }}>
              <Eyebrow>Visítanos</Eyebrow>
              <p className={`${display.className} text-[24px] font-medium leading-tight`}>
                {BIZ.address}
                <br />
                <span style={{ color: C.muted }}>
                  {BIZ.city}, {BIZ.region}
                </span>
              </p>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.muted }}>
                Consultas, pedidos de pastelería y talleres por WhatsApp al {BIZ.phoneDisplay}.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={btn} style={{ backgroundColor: C.coralDeep, color: '#fff' }}>
                  Escribir por WhatsApp
                </a>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${btn} border`} style={{ borderColor: C.ink, color: C.ink }}>
                  Cómo llegar
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="px-5 py-8" style={{ backgroundColor: C.espresso, color: C.paper }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src={`${IMG}/logo.webp`} alt="" width={36} height={36} className="h-9 w-9 rounded-full" />
            <p className={`${display.className} text-[18px] font-medium`}>{BIZ.name}</p>
          </div>
          <nav aria-label="Redes y contacto" className="flex flex-wrap gap-x-5 gap-y-2 text-[14px] font-semibold">
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={`tap-44 underline-offset-4 hover:underline ${focusRing}`}>
              Instagram
            </a>
            <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className={`tap-44 underline-offset-4 hover:underline ${focusRing}`}>
              Facebook
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`tap-44 underline-offset-4 hover:underline ${focusRing}`}>
              WhatsApp
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`tap-44 underline-offset-4 hover:underline ${focusRing}`}>
              Maps
            </a>
          </nav>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
    </div>
  )
}
