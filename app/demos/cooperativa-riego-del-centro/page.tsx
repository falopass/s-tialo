import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

// Petróleo de canal + lima de cultivo: el agua que llega al campo.
const C = {
  deep: '#0C2E3A',
  petroleo: '#134457',
  agua: '#0F5E74',
  paper: '#F3F0E4',
  ink: '#10242B',
  muted: '#5A707A',
  lima: '#A8C622',
  white: '#FFFFFF',
  line: 'rgba(16,36,43,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cooperativa-riego-del-centro',
  title: 'Cooperativa de Riego del Centro · 5.500 regantes del Maule',
  description:
    'La única cooperativa de regantes de Chile: 14 Organizaciones de Usuarios de Agua, unos 5.500 regantes y 35.000 hectáreas en la cuenca del Maule desde 1966. Oficina en San Clemente.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La red', href: '#red' },
  { label: 'Hitos', href: '#hitos' },
  { label: 'Directiva', href: '#directiva' },
  { label: 'Oficina', href: '#oficina' },
]

const STATS = [
  { n: '1966', d: 'fundada: la única cooperativa de regantes de Chile' },
  { n: '14', d: 'Organizaciones de Usuarios de Agua agrupadas' },
  { n: '5.500', d: 'regantes aprox. en la cuenca del Maule' },
  { n: '35.000 ha', d: 'de superficie regada asociada' },
]

const FUNCIONES = [
  {
    k: 'Las OUA del Maule',
    desc: 'Agrupa 14 Organizaciones de Usuarios de Agua de la cuenca: las juntas y canales que reparten el agua del río entre miles de parcelas.',
  },
  {
    k: 'Obras con la CNR',
    desc: 'Desarrolla y ejecuta proyectos de mejoramiento de canales junto a la Comisión Nacional de Riego: compuertas, revestimiento y obras de captación.',
  },
  {
    k: 'Bonos de riego',
    desc: 'Es canal para los beneficios de la Ley de Fomento al Riego: el regante accede al apoyo del Estado para modernizar su infraestructura.',
  },
  {
    k: 'La voz de los regantes',
    desc: 'Representa a sus asociados ante la DGA, el GORE y los municipios de las 7 comunas donde opera la red de canales.',
  },
]

const HITOS = [
  {
    year: '1966',
    title: 'Nace la cooperativa',
    desc: 'Los regantes de la zona centro del Maule se organizan en cooperativa para administrar sus canales. Sesenta años después sigue siendo la única del país.',
  },
  {
    year: '2024',
    title: 'El equipo, certificado',
    desc: 'Funcionarios y directiva completan el programa de certificación de competencias: la oficina de Villa Los Aromos trabaja con estándares documentados.',
    img: 'directiva.webp',
    alt: 'Equipo y directiva de la cooperativa con su certificado en la oficina de San Clemente',
  },
  {
    year: '2026',
    title: 'Compuertas del canal Taco',
    desc: 'Se ejecuta la renovación de compuertas del canal Taco General, un proyecto de unos 875 millones de pesos junto a la Comisión Nacional de Riego.',
    img: 'compuertas2.webp',
    alt: 'Compuertas metálicas del canal Taco General sobre el agua',
  },
]

export default function DemoRiego() {
  return (
    <main
      id="inicio"
      className={`${body.className} min-h-[100dvh] overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={
          <>
            <span className={display.className} style={{ letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              Riego del Centro
            </span>
          </>
        }
        links={NAV_LINKS}
        waLink={BIZ.phoneTel}
        ctaLabel="Llamar"
        theme={{
          over: 'dark',
          bar: 'rgba(12,46,58,0.94)',
          ink: '#F3F0E4',
          line: 'rgba(255,255,255,0.14)',
          btnBg: C.lima,
          btnInk: '#10242B',
        }}
      />

      {/* ── Hero: las compuertas a sangre llena ── */}
      <section className="relative min-h-[88svh] flex items-end">
        <Image
          src={`${IMG}/hero.webp`}
          alt="Compuertas de canal administradas por la cooperativa de regantes del Maule"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(12,46,58,0.55) 0%, rgba(12,46,58,0.28) 42%, rgba(12,46,58,0.92) 100%)' }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-32">
          <Reveal>
            <div
              className="rounded-[14px] p-5 md:p-7 -ml-1 md:ml-0"
              style={{ backgroundColor: 'rgba(12,46,58,0.92)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
            >
            <p
              className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-4`}
              style={{ color: C.lima }}
            >
              Cooperativa de regantes · San Clemente, Maule
            </p>
            <h1
              className={`${display.className} uppercase text-[38px] md:text-[64px] leading-[0.98] font-semibold text-white max-w-[16ch] mb-5`}
              style={{ letterSpacing: '0.01em' }}
            >
              Sesenta años moviendo el agua del Maule
            </h1>
            <p className="text-[15px] md:text-lg leading-relaxed max-w-[56ch] mb-7" style={{ color: 'rgba(255,255,255,0.86)' }}>
              {BIZ.name}: la única cooperativa de regantes de Chile. Detrás de
              cada compuerta que se abre hay 5.500 familias regando 35.000
              hectáreas.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={BIZ.phoneTel}
                className="inline-flex items-center px-5 py-3 rounded-full text-sm font-bold transition-transform active:scale-95"
                style={{ backgroundColor: C.lima, color: '#10242B' }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href="#red"
                className="inline-flex items-center px-5 py-3 rounded-full text-sm font-semibold border text-white transition-transform active:scale-95"
                style={{ borderColor: 'rgba(255,255,255,0.6)' }}
              >
                Ver la red de canales
              </a>
            </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja de cifras ── */}
      <section style={{ backgroundColor: C.deep, color: '#EAF0EE' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-7">
          {STATS.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <p className={`${display.className} uppercase text-[30px] md:text-[38px] leading-none font-semibold`} style={{ color: C.lima }}>
                {s.n}
              </p>
              <p className={`${mono.className} mt-2 text-[10px] md:text-[11px] uppercase tracking-[0.13em] leading-relaxed`} style={{ color: 'rgba(234,240,238,0.68)' }}>
                {s.d}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── La red: qué hace la cooperativa ── */}
      <section id="red" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-3`} style={{ color: C.agua }}>
              Qué hace la cooperativa
            </p>
            <h2 className={`${display.className} uppercase text-[28px] md:text-[40px] leading-[1.04] font-semibold mb-10 md:mb-14 max-w-[22ch]`}>
              Del río a la compuerta de tu parcela
            </h2>
          </Reveal>
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute left-[7px] md:left-1/2 top-1 bottom-1 w-[3px] rounded-full md:-translate-x-1/2"
              style={{ background: `linear-gradient(180deg, ${C.agua}, ${C.lima})` }}
            />
            <div className="space-y-6 md:space-y-0">
              {FUNCIONES.map((f, i) => (
                <Reveal key={f.k} delay={i * 70}>
                  <div
                    className={`relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-12 md:py-6 ${
                      i % 2 === 0 ? '' : ''
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-2 md:top-9 md:left-1/2 md:-translate-x-1/2 w-[15px] h-[15px] rounded-full border-[3px]"
                      style={{ borderColor: C.paper, backgroundColor: i % 2 === 0 ? C.agua : C.lima, boxShadow: `0 0 0 2px ${i % 2 === 0 ? C.agua : C.lima}` }}
                    />
                    <div className={i % 2 === 0 ? 'md:pr-14 md:text-right' : 'md:col-start-2 md:pl-14'}>
                      <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mb-1.5`} style={{ color: C.agua }}>
                        {`0${i + 1}`}
                      </p>
                      <h3 className={`${display.className} uppercase text-[19px] md:text-[22px] font-semibold mb-2`}>
                        {f.k}
                      </h3>
                      <p className="text-[14px] md:text-[15px] leading-relaxed max-w-[54ch] md:max-w-none" style={{ color: C.muted }}>
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Hitos con fotos ── */}
      <section id="hitos" className="pb-14 md:pb-20" style={{ backgroundColor: '#E9E6D6' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-3`} style={{ color: C.agua }}>
              La línea del agua
            </p>
            <h2 className={`${display.className} uppercase text-[28px] md:text-[40px] leading-[1.04] font-semibold mb-10`}>
              Hitos de la cooperativa
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {HITOS.map((h, i) => (
              <Reveal key={h.year} delay={i * 90}>
                <article
                  className="rounded-[16px] border overflow-hidden h-full flex flex-col"
                  style={{ borderColor: C.line, backgroundColor: C.paper }}
                >
                  {h.img ? (
                    <Image
                      src={`${IMG}/${h.img}`}
                      alt={h.alt ?? ''}
                      width={1200}
                      height={700}
                      className="w-full h-44 object-cover"
                    />
                  ) : (
                    <div
                      className="h-44 flex items-end p-5"
                      style={{ background: `linear-gradient(135deg, ${C.petroleo}, ${C.agua})` }}
                    >
                      <span className={`${display.className} uppercase text-white text-[44px] leading-none font-semibold`}>
                        {h.year}
                      </span>
                    </div>
                  )}
                  <div className="p-5 md:p-6 flex-1">
                    <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mb-2`} style={{ color: C.agua }}>
                      {h.img ? h.year : 'Fundación'}
                    </p>
                    <h3 className={`${display.className} uppercase text-[18px] font-semibold mb-2`}>{h.title}</h3>
                    <p className="text-[14px] leading-relaxed" style={{ color: C.muted }}>
                      {h.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── La directiva en terreno ── */}
      <section id="directiva" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <Reveal>
            <figure>
              <div className="rounded-[18px] overflow-hidden border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/reunion.webp`}
                  alt="Directiva de la cooperativa frente a su oficina en Villa Los Aromos, San Clemente"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                />
              </div>
              <figcaption className={`${mono.className} mt-2.5 text-[10px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                Directiva y gerencia en la oficina de Villa Los Aromos
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-3`} style={{ color: C.agua }}>
              Gente del agua
            </p>
            <h2 className={`${display.className} uppercase text-[26px] md:text-[36px] leading-[1.05] font-semibold mb-5`}>
              Regantes que administran regantes
            </h2>
            <p className="text-[15px] leading-relaxed mb-5" style={{ color: C.muted }}>
              La cooperativa la dirige una mesa elegida entre los propios
              usuarios del agua. Al frente está la presidenta María Olga Carril
              y la gerencia general a cargo de Rodrigo Ugarte, con la oficina
              abierta de lunes a viernes en San Clemente.
            </p>
            <ul className="space-y-3">
              {[
                ['Presidenta', 'María Olga Carril'],
                ['Gerente general', 'Rodrigo Ugarte'],
                ['Sede', 'Villa Los Aromos, San Clemente'],
              ].map(([k, v]) => (
                <li key={k} className="flex items-baseline gap-3 border-b pb-2.5" style={{ borderColor: C.line }}>
                  <span className={`${mono.className} text-[10px] uppercase tracking-[0.14em] w-28 shrink-0`} style={{ color: C.muted }}>
                    {k}
                  </span>
                  <span className="text-[15px] font-semibold">{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Oficina + mapa ── */}
      <section id="oficina" className="pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div
            className="rounded-[20px] overflow-hidden grid lg:grid-cols-5"
            style={{ backgroundColor: C.deep, color: '#EAF0EE' }}
          >
            <div className="lg:col-span-3 p-6 md:p-9">
              <Reveal>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-4`} style={{ color: C.lima }}>
                  La oficina
                </p>
                <h2 className={`${display.className} uppercase text-[24px] md:text-[32px] leading-[1.06] font-semibold mb-6 text-white`}>
                  Villa Los Aromos, San Clemente
                </h2>
                <dl className="space-y-4 text-[14px] md:text-[15px]">
                  <div>
                    <dt className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mb-1`} style={{ color: 'rgba(234,240,238,0.55)' }}>
                      Dirección
                    </dt>
                    <dd>{BIZ.address}, {BIZ.city}</dd>
                  </div>
                  <div>
                    <dt className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mb-1`} style={{ color: 'rgba(234,240,238,0.55)' }}>
                      Horario de atención
                    </dt>
                    <dd>{BIZ.hours} · sábado y domingo cerrado</dd>
                  </div>
                  <div>
                    <dt className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mb-1`} style={{ color: 'rgba(234,240,238,0.55)' }}>
                      Teléfono
                    </dt>
                    <dd>
                      <a href={BIZ.phoneTel} className="font-semibold underline underline-offset-4 decoration-1">
                        {BIZ.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </dl>
                <div className="mt-6 flex items-center gap-3 flex-wrap">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-3 rounded-full text-sm font-bold transition-transform active:scale-95"
                    style={{ backgroundColor: C.lima, color: '#10242B' }}
                  >
                    Cómo llegar
                  </a>
                  <span className="inline-flex items-center gap-2 text-[12px]" style={{ color: 'rgba(234,240,238,0.62)' }}>
                    <Stars value={BIZ.rating} color={C.lima} className="w-3.5 h-3.5" />
                    {BIZ.rating} · {BIZ.reviews} reseñas en Maps
                  </span>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-2 relative min-h-[280px]">
              <LazyMap
                src={MAPS_EMBED}
                title="Ubicación de la Cooperativa de Riego del Centro en San Clemente"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: 'rgba(255,255,255,0.12)', backgroundColor: C.deep, color: '#EAF0EE' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="flex-1 min-w-0">
            <p className={`${display.className} uppercase text-[17px] font-semibold leading-snug`}>{BIZ.short}</p>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mt-1`} style={{ color: 'rgba(234,240,238,0.55)' }}>
              {BIZ.razonSocial} · RUT {BIZ.rut}
            </p>
          </div>
          <p className={`${mono.className} text-[11px] leading-relaxed md:text-right`} style={{ color: 'rgba(234,240,238,0.55)' }}>
            {BIZ.address}, {BIZ.city}, {BIZ.region}
            <br />
            Demo de ejemplo · Sitiazo
          </p>
        </div>
      </footer>

      <CallFab href={BIZ.phoneTel} label={`Llamar a ${BIZ.short}`} bg={C.lima} fg="#10242B" />
    </main>
  )
}
