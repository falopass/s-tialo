import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'
import { BIZ, IMG, MAPS_EMBED, MAPS_URL, PROJECTS, REVIEWS, SERVICES, WA_LINK } from './content'

const serif = localFont({
  src: [
    { path: '../../fonts/instrument-serif/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/instrument-serif/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const sans = localFont({ src: '../../fonts/karla/normal-200-800.woff2', weight: '200 800' })

export const metadata: Metadata = demoMetadata({
  slug: 'nafi-arquitectura',
  title: 'NAFI Arquitectura — Estudio de arquitectura en Talca',
  description:
    'Proyectos de arquitectura, interiorismo, valorización de terrenos y dirección de obra. Camila Figueroa + Javiera Navarrete, Patio Rugendas, Talca.',
})

const C = {
  bone: '#F3EFE8',
  paper: '#FBF9F5',
  graphite: '#1B1B19',
  concrete: '#6E6A62',
  terracotta: '#A8492F',
  ink: '#1B1B19',
  line: 'rgba(27,27,25,0.16)',
  lineSoft: 'rgba(27,27,25,0.08)',
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Estudio', href: '#estudio' },
]

function Cuadricula({ id, color = C.graphite, opacity = 0.07 }: { id: string; color?: string; opacity?: number }) {
  return (
    <svg className="absolute inset-0 w-full h-full" aria-hidden="true" focusable="false">
      <defs>
        <pattern id={id} width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0H0V48" fill="none" stroke={color} strokeWidth="1" />
          <path d="M20 24h8M24 20v8" stroke={color} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} opacity={opacity} />
    </svg>
  )
}

function Cota({ label, ink = C.concrete }: { label: string; ink?: string }) {
  return (
    <div className={`${sans.className} flex items-center gap-3 text-[11px] uppercase tracking-[0.2em]`} style={{ color: ink }}>
      <span className="inline-block h-px w-8" style={{ backgroundColor: C.terracotta }} />
      {label}
    </div>
  )
}

function Btn({
  href,
  children,
  tone,
  external = true,
}: {
  href: string
  children: React.ReactNode
  tone: 'ink' | 'paper' | 'line' | 'ghost'
  external?: boolean
}) {
  const st =
    tone === 'ink'
      ? { backgroundColor: C.graphite, color: C.paper }
      : tone === 'paper'
        ? { backgroundColor: C.paper, color: C.graphite }
        : tone === 'ghost'
          ? { backgroundColor: 'transparent', color: C.paper, boxShadow: `inset 0 0 0 1px rgba(251,249,245,0.7)` }
          : { backgroundColor: 'transparent', color: C.graphite, boxShadow: `inset 0 0 0 1px ${C.graphite}` }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${sans.className} inline-flex items-center justify-center px-6 py-3 text-[14px] font-semibold uppercase tracking-[0.12em] transition-transform active:scale-[0.98] tap-44`}
      style={st}
    >
      {children}
    </a>
  )
}

export default function NafiPage() {
  return (
    <div className={`${sans.className} min-h-screen`} style={{ backgroundColor: C.bone, color: C.ink }}>
      <BlitzNav
        name="NAFI Arquitectura"
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${serif.className} text-xl`}
        theme={{ over: 'dark', bar: 'rgba(243,239,232,0.94)', ink: C.graphite, line: C.line, btnBg: C.graphite, btnInk: C.paper }}
        ctaLabel="Conversar"
      />

      {/* HERO: foto real a sangre */}
      <section id="inicio" className="relative md:min-h-[92svh] flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.graphite }}>
        <div className="relative aspect-[4/3] mt-[72px] md:mt-0 md:absolute md:inset-0 md:aspect-auto">
          <Image
            src={`${IMG}/hero.webp`}
            alt="Render nocturno de Casa Nido: fachada iluminada de madera y acero, proyecto de NAFI Arquitectura"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(27,27,25,1) 0%, rgba(27,27,25,0.55) 40%, rgba(27,27,25,0.1) 100%)' }} />
        </div>
        <div className="relative max-w-6xl mx-auto w-full px-5 pb-12 -mt-16 md:mt-0 md:pt-40 md:pb-16">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em]" style={{ color: 'rgba(251,249,245,0.8)' }}>
              Estudio de arquitectura · Talca
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`${serif.className} mt-4 text-[48px] leading-[0.98] md:text-[92px] max-w-4xl`} style={{ color: C.paper }}>
              Casas que <em>miran</em> al Maule
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(251,249,245,0.85)' }}>
              Proyectos de arquitectura, interiorismo y dirección de obra desde Patio Rugendas. Un estudio de dos
              arquitectas: {BIZ.team}.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Btn href={WA_LINK} tone="paper">Conversar un proyecto</Btn>
              <Btn href="#proyectos" tone="ghost" external={false}>Ver proyectos</Btn>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <dl className="mt-12 grid grid-cols-3 gap-4 max-w-lg border-t pt-5" style={{ borderColor: 'rgba(251,249,245,0.25)' }}>
              {[
                [BIZ.rating, `${BIZ.reviews} reseñas en Google`],
                [BIZ.followers, 'seguidores en Instagram'],
                ['2', 'arquitectas socias'],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className={`${serif.className} text-3xl md:text-4xl`} style={{ color: C.paper }}>{n}</dt>
                  <dd className="text-xs mt-1 leading-snug" style={{ color: 'rgba(251,249,245,0.7)' }}>{l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* MANIFIESTO con plano */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <Cuadricula id="nafi-grid-1" />
        <div className="relative max-w-6xl mx-auto px-5 grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <Reveal>
            <Cota label="El estudio" />
            <h2 className={`${serif.className} mt-4 text-4xl md:text-6xl leading-[1.02]`} style={{ color: C.graphite }}>
              Del anteproyecto a la <em style={{ color: C.terracotta }}>visita de obra</em>, con las mismas manos.
            </h2>
            <p className="mt-6 text-lg leading-relaxed max-w-lg" style={{ color: C.concrete }}>
              NAFI es un estudio de dos socias que acompaña cada encargo desde la planimetría y el permiso de
              edificación hasta la visita de obra en terreno.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <figure className="relative">
              <div className="relative aspect-[4/3] overflow-hidden" style={{ boxShadow: '0 24px 60px rgba(27,27,25,0.16)' }}>
                <Image src={`${IMG}/plano.webp`} alt="Planta de arquitectura de una vivienda de un piso dibujada por NAFI" fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-[11px] uppercase tracking-[0.2em]" style={{ color: C.concrete }}>
                Planta · vivienda de un piso
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* SERVICIOS como índice */}
      <section id="servicios" className="py-16 md:py-24" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <Cota label="Servicios" />
            <h2 className={`${serif.className} mt-4 text-4xl md:text-6xl leading-[1.02]`} style={{ color: C.graphite }}>
              Cuatro maneras de <em>trabajar juntos</em>
            </h2>
          </Reveal>
          <ol className="mt-10 border-t" style={{ borderColor: C.line }}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <li className="grid grid-cols-[48px_1fr] md:grid-cols-[80px_1fr_1.4fr] gap-4 md:gap-8 py-6 border-b items-start" style={{ borderColor: C.line }}>
                  <span className={`${serif.className} text-2xl md:text-3xl`} style={{ color: C.terracotta }}>0{i + 1}</span>
                  <h3 className={`${serif.className} text-2xl md:text-3xl`} style={{ color: C.graphite }}>{s.title}</h3>
                  <p className="col-start-2 md:col-start-3 leading-relaxed" style={{ color: C.concrete }}>{s.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="relative py-16 md:py-24 overflow-hidden">
        <Cuadricula id="nafi-grid-2" />
        <div className="relative max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="md:flex md:items-end md:justify-between gap-8">
              <div>
                <Cota label="Proyectos" />
                <h2 className={`${serif.className} mt-4 text-4xl md:text-6xl leading-[1.02]`} style={{ color: C.graphite }}>
                  Obra <em>reciente</em>
                </h2>
              </div>
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 tap-44" style={{ color: C.graphite }}>
                Portafolio completo en Instagram →
              </a>
            </div>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 gap-x-6 gap-y-10">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className={i % 2 === 1 ? 'sm:mt-12' : ''}>
                  <div className="relative aspect-[4/3] overflow-hidden" style={{ boxShadow: '0 20px 50px rgba(27,27,25,0.14)' }}>
                    <Image src={`${IMG}/${p.img}`} alt={p.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4 border-b pb-3" style={{ borderColor: C.line }}>
                    <h3 className={`${serif.className} text-2xl md:text-3xl`} style={{ color: C.graphite }}>
                      <span className="text-base mr-3" style={{ color: C.terracotta }}>{p.n}</span>
                      {p.title}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.2em] shrink-0" style={{ color: C.concrete }}>{p.year}</span>
                  </div>
                  <p className="mt-3 leading-relaxed" style={{ color: C.concrete }}>{p.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EN TERRENO + RESEÑAS */}
      <section className="py-16 md:py-24" style={{ backgroundColor: C.graphite }}>
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={`${IMG}/obra-visita.webp`} alt="Visita de obra: montaje de paneles de madera en una vivienda en construcción" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Cota label={`${BIZ.rating} · ${BIZ.reviews} reseñas en Google`} ink="rgba(251,249,245,0.75)" />
              <h2 className={`${serif.className} mt-4 text-4xl md:text-5xl leading-[1.02]`} style={{ color: C.paper }}>
                Lo que dicen <em>quienes ya construyeron</em>
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.text} delay={i * 100}>
                  <blockquote className="border-l-2 pl-5 py-1" style={{ borderColor: C.terracotta }}>
                    <p className={`${serif.className} text-xl md:text-2xl leading-snug`} style={{ color: C.paper }}>“{r.text}”</p>
                    <footer className="mt-2 text-xs uppercase tracking-[0.2em]" style={{ color: 'rgba(251,249,245,0.65)' }}>{r.author}</footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ESTUDIO / UBICACION */}
      <section id="estudio" className="relative py-16 md:py-24 overflow-hidden">
        <Cuadricula id="nafi-grid-3" />
        <div className="relative max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <Cota label="Oficina" />
            <h2 className={`${serif.className} mt-4 text-4xl md:text-6xl leading-[1.02]`} style={{ color: C.graphite }}>
              Patio Rugendas, <em>oficina 5</em>
            </h2>
            <dl className="mt-8 grid gap-5 text-[15px]">
              <div className="grid grid-cols-[96px_1fr] gap-3 border-b pb-4" style={{ borderColor: C.line }}>
                <dt className="text-xs uppercase tracking-[0.2em] pt-1" style={{ color: C.concrete }}>Dirección</dt>
                <dd>{BIZ.address}, {BIZ.city}, {BIZ.region}</dd>
              </div>
              <div className="grid grid-cols-[96px_1fr] gap-3 border-b pb-4" style={{ borderColor: C.line }}>
                <dt className="text-xs uppercase tracking-[0.2em] pt-1" style={{ color: C.concrete }}>Horario</dt>
                <dd>{BIZ.hours}</dd>
              </div>
              <div className="grid grid-cols-[96px_1fr] gap-3 border-b pb-4" style={{ borderColor: C.line }}>
                <dt className="text-xs uppercase tracking-[0.2em] pt-1" style={{ color: C.concrete }}>Contacto</dt>
                <dd className="break-words">
                  {BIZ.phoneDisplay}
                  <br />
                  <a href={`mailto:${BIZ.email}`} className="underline underline-offset-4">{BIZ.email}</a>
                </dd>
              </div>
              <div className="grid grid-cols-[96px_1fr] gap-3 border-b pb-4" style={{ borderColor: C.line }}>
                <dt className="text-xs uppercase tracking-[0.2em] pt-1" style={{ color: C.concrete }}>Equipo</dt>
                <dd>{BIZ.team}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Btn href={WA_LINK} tone="ink">Escribir por WhatsApp</Btn>
              <Btn href={MAPS_URL} tone="line">Cómo llegar</Btn>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden" style={{ boxShadow: '0 24px 60px rgba(27,27,25,0.16)' }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full h-[300px] md:h-[440px] border-0" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.terracotta }}>
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-20 md:flex md:items-center md:justify-between gap-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em]" style={{ color: C.paper }}>¿Tienes un terreno o una idea?</p>
            <h2 className={`${serif.className} mt-3 text-4xl md:text-6xl leading-[1.02]`} style={{ color: C.paper }}>
              Conversemos el <em>primer croquis</em>.
            </h2>
          </div>
          <div className="mt-8 md:mt-0 shrink-0">
            <Btn href={WA_LINK} tone="paper">WhatsApp {BIZ.phoneDisplay}</Btn>
          </div>
        </div>
      </section>

      <footer className="pt-10 pb-6" style={{ backgroundColor: C.graphite, color: 'rgba(251,249,245,0.75)' }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${serif.className} text-2xl`} style={{ color: C.paper }}>{BIZ.legal}</p>
            <p className="text-sm mt-1">{BIZ.rubro} · {BIZ.address}, {BIZ.city}</p>
          </div>
          <nav className="flex gap-4 text-sm">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:underline tap-44">{l.label}</a>
            ))}
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline tap-44">Instagram</a>
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
