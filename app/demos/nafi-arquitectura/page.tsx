import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { Reveal, SiteNav, WhatsAppFab } from './chrome'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, PROJECTS, SERVICES, REVIEWS } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/onest/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

/**
 * Paleta del demo: tinta, papel y cobre. Composición editorial de estudio
 * de arquitectura: titulares grandes, retícula tipo lámina y fotos de obra.
 */
const C = {
  ink: '#0D0D0D',
  paper: '#F4F1EC',
  copper: '#B4643C',
  gray: '#6E6A63',
  line: 'rgba(13,13,13,0.14)',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B4643C]'
const BTN_WA = `inline-flex items-center justify-center gap-2 rounded-full bg-[#A85C34] text-white font-bold transition-transform hover:-translate-y-0.5 active:scale-95 ${FOCUS}`
const BTN_LINE = `inline-flex items-center justify-center rounded-full border font-semibold transition-colors ${FOCUS}`
const TAG = 'inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]'

export const metadata: Metadata = demoMetadata({
  slug: 'nafi-arquitectura',
  title: 'NAFI Arquitectura - Estudio de arquitectura en Talca',
  description:
    'NAFI Arquitectura Ltda.: estudio de arquitectura e interiorismo en Patio Rugendas, Talca. Proyectos, valorización y dirección de obra. WhatsApp +56 9 8776 4207.',
  image: '/demos/nafi-arquitectura/hero.webp',
})

export default function NafiArquitecturaPage() {
  return (
    <div className={`${body.className} bg-[#F4F1EC] text-[#0D0D0D] antialiased`}>
      {/* ── Hero a sangre ── */}
      <header id="inicio" className="relative min-h-[100svh] overflow-hidden bg-[#0D0D0D]">
        <Image
          src={`${IMG}/hero.webp`}
          alt="Render nocturno de Casa Nido, proyecto de NAFI Arquitectura"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(180deg, ${C.ink}b8 0%, ${C.ink}33 45%, ${C.ink}f0 100%)` }}
        />
        <SiteNav fontClass={display.className} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 pt-[24svh] pb-14">
          <p className={`${TAG} border border-white/30 text-white`} style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
            {BIZ.rubro} · {BIZ.city}
          </p>
          <h1 className={`${display.className} mt-6 max-w-[16ch] text-white text-[2.4rem] leading-[1.05] sm:text-6xl md:text-7xl font-extrabold tracking-tight`}>
            Arquitectura que se piensa <span className="text-[#B4643C]">en terreno</span>.
          </h1>
          <p className="mt-6 max-w-[34rem] text-base md:text-lg leading-relaxed" style={{ color: 'rgba(244,241,236,0.82)' }}>
            {BIZ.team}. Proyectos, interiorismo y valorización de terrenos en la
            Región del Maule, del anteproyecto a la obra.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${BTN_WA} px-7 py-3 text-base`}>
              Conversar un proyecto
            </a>
            <a
              href="#proyectos"
              className={`${BTN_LINE} px-7 py-3 text-base text-white`}
              style={{ borderColor: 'rgba(244,241,236,0.4)' }}
            >
              Ver proyectos
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 max-w-[34rem] divide-x divide-white/20 border-y border-white/20 text-white">
            <div className="py-4 pr-4">
              <dt className="text-[11px] uppercase tracking-[0.16em]" style={{ color: 'rgba(244,241,236,0.75)' }}>Google Maps</dt>
              <dd className={`${display.className} mt-1 text-2xl font-bold`}>{BIZ.rating} <span className="text-sm font-medium">★ · {BIZ.reviews} reseñas</span></dd>
            </div>
            <div className="py-4 px-4">
              <dt className="text-[11px] uppercase tracking-[0.16em]" style={{ color: 'rgba(244,241,236,0.75)' }}>Instagram</dt>
              <dd className={`${display.className} mt-1 text-2xl font-bold`}>{BIZ.followers}</dd>
            </div>
            <div className="py-4 pl-4">
              <dt className="text-[11px] uppercase tracking-[0.16em]" style={{ color: 'rgba(244,241,236,0.75)' }}>Oficina</dt>
              <dd className={`${display.className} mt-1 text-base md:text-lg font-bold leading-tight`}>Patio Rugendas</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ── Proyectos en láminas ── */}
      <section id="proyectos" className="max-w-[1200px] mx-auto px-5 md:px-8 pt-24 md:pt-32">
        <Reveal className="max-w-[44rem]">
          <p className={`${TAG} bg-[#0D0D0D] text-[#F4F1EC]`}>Portafolio · Instagram @nafi_arquitectura</p>
          <h2 className={`${display.className} mt-5 text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]`}>
            Cada proyecto, <span style={{ color: C.gray }}>una lámina.</span>
          </h2>
        </Reveal>

        <ol className="mt-14 pb-24">
          {PROJECTS.map((p, i) => (
            <li
              key={p.n}
              className="sticky mb-8 md:mb-14"
              style={{ top: `calc(1.25rem + ${i * 1.4}rem)`, zIndex: i + 1 }}
            >
              <article
                className="grid md:grid-cols-[1.15fr_1fr] overflow-hidden rounded-[2rem] min-h-[60svh] md:min-h-[30rem] shadow-[0_-12px_40px_-18px_rgba(13,13,13,0.5)]"
                style={{
                  backgroundColor: i % 2 ? C.ink : '#FFFFFF',
                  color: i % 2 ? C.paper : C.ink,
                }}
              >
                <div className="relative min-h-[15rem] md:min-h-full">
                  <Image src={`${IMG}/${p.img}`} alt={p.alt} fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" />
                  <span className={`${display.className} absolute top-5 left-5 rounded-full text-xs font-bold px-3 py-1.5`} style={{ backgroundColor: C.ink, color: C.paper }}>
                    {p.n} / 0{PROJECTS.length}
                  </span>
                </div>
                <div className="p-7 md:p-12 flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className={`${TAG} ${i % 2 ? 'text-[#F4F1EC]' : 'text-[#0D0D0D]'}`} style={{ backgroundColor: i % 2 ? 'rgba(244,241,236,0.14)' : 'rgba(13,13,13,0.08)' }}>
                      {p.year}
                    </span>
                    <span className={`text-[11px] uppercase tracking-[0.16em] ${i % 2 ? 'text-[#F4F1EC]' : 'text-[#6E6A63]'}`}>Proyecto</span>
                  </div>
                  <h3 className={`${display.className} mt-5 text-2xl md:text-4xl font-bold tracking-tight leading-tight`}>{p.title}</h3>
                  <p className={`mt-4 text-base md:text-lg leading-relaxed ${i % 2 ? '' : ''}`} style={{ color: i % 2 ? 'rgba(244,241,236,0.78)' : C.gray }}>{p.desc}</p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="bg-[#0D0D0D] text-[#F4F1EC]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-24 md:py-32">
          <Reveal className="max-w-[44rem]">
            <p className={`${TAG} text-[#F4F1EC]`} style={{ backgroundColor: 'rgba(244,241,236,0.12)' }}>Qué hace el estudio</p>
            <h2 className={`${display.className} mt-5 text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]`}>
              Del terreno a la llave.
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <article className="h-full rounded-[1.5rem] p-7 border" style={{ borderColor: 'rgba(244,241,236,0.18)', backgroundColor: 'rgba(244,241,236,0.05)' }}>
                  <span className={`${display.className} text-sm font-bold text-[#B4643C]`}>0{i + 1}</span>
                  <h3 className={`${display.className} mt-4 text-xl md:text-2xl font-bold tracking-tight`}>{s.title}</h3>
                  <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(244,241,236,0.72)' }}>{s.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El estudio ── */}
      <section id="estudio" className="max-w-[1200px] mx-auto px-5 md:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src={`${IMG}/plano.webp`}
              alt="Plano de planta de Casa Prisma, proyecto de NAFI Arquitectura"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className={`${TAG} bg-[#0D0D0D] text-[#F4F1EC]`}>El estudio</p>
          <h2 className={`${display.className} mt-5 text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]`}>
            Dos arquitectas, una oficina en Patio Rugendas.
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: C.gray }}>
            {BIZ.legal} es el estudio de {BIZ.team}, con oficina en {BIZ.address}, {BIZ.city}.
            Atienden de lunes a viernes y cada proyecto se trabaja en directo con las socias.
          </p>
          <blockquote className="mt-8 border-l-2 pl-5 space-y-4" style={{ borderColor: C.copper }}>
            {REVIEWS.map((r) => (
              <p key={r.text} className="text-sm md:text-base leading-relaxed">
                «{r.text}» <span className="block mt-1 text-xs" style={{ color: C.gray }}>— {r.author}</span>
              </p>
            ))}
          </blockquote>
          <p className="mt-8 text-sm" style={{ color: C.gray }}>
            {BIZ.rating} ★ en {BIZ.reviews} reseñas de Google Maps y {BIZ.followers} seguidores en{' '}
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 hover:text-[#0D0D0D] rounded-sm ${FOCUS}`}>
              Instagram
            </a>
            .
          </p>
        </Reveal>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="bg-[#0D0D0D] text-[#F4F1EC]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-24 md:py-32 grid md:grid-cols-[1fr_1.1fr] gap-12 items-stretch">
          <Reveal className="flex flex-col">
            <p className={`${TAG} text-[#F4F1EC] self-start`} style={{ backgroundColor: 'rgba(244,241,236,0.12)' }}>Contacto</p>
            <h2 className={`${display.className} mt-5 text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]`}>
              Agenda una hora y conversemos el proyecto.
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(244,241,236,0.75)' }}>
              Escríbenos por WhatsApp con tu idea y el terreno. Te responde el estudio directo.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${BTN_WA} px-8 py-3 text-base self-start`}>
                WhatsApp {BIZ.phoneDisplay}
              </a>
              <a
                href={`mailto:${BIZ.email}`}
                className={`${BTN_LINE} px-6 py-3 text-base text-[#F4F1EC]`}
                style={{ borderColor: 'rgba(244,241,236,0.4)' }}
              >
                {BIZ.email}
              </a>
            </div>
            <address className="not-italic mt-auto pt-12 leading-relaxed" style={{ color: 'rgba(244,241,236,0.8)' }}>
              <span className="block text-[11px] uppercase tracking-[0.16em] mb-2" style={{ color: 'rgba(244,241,236,0.7)' }}>Oficina</span>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region} · {BIZ.hours}
              <br />
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`inline-block mt-3 font-semibold text-[#F4F1EC] underline underline-offset-4 rounded-sm ${FOCUS}`}>
                Cómo llegar en Google Maps
              </a>
            </address>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full min-h-[22rem] overflow-hidden rounded-[2rem] border" style={{ borderColor: 'rgba(244,241,236,0.15)' }}>
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

      <footer className="bg-[#0D0D0D] text-[#F4F1EC] border-t" style={{ borderColor: 'rgba(244,241,236,0.14)' }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-8 pb-24">
          <p className={`${display.className} text-lg font-bold`}>{BIZ.name}</p>
          <address className="not-italic mt-2 text-sm leading-relaxed" style={{ color: 'rgba(244,241,236,0.8)' }}>
            {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay} · {BIZ.email}
          </address>
          <p className="mt-4 text-xs leading-relaxed" style={{ color: 'rgba(244,241,236,0.65)' }}>
            Datos de contacto, reseñas y fotos reales (Google Maps e Instagram); textos descriptivos de muestra.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WhatsAppFab />
    </div>
  )
}
