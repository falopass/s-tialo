import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_URL, WA_LINK } from './content'
import { BlitzNav, Reveal, WaFab } from './chrome'

const display = localFont({
  src: [{ path: '../../fonts/sora/normal-100-800.woff2', weight: '100 800' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900' }],
})

const C = {
  ink: '#20262A',
  deep: '#111517',
  orange: '#A6410A',
  yellow: '#F3C34F',
  paper: '#F3F1EC',
  soft: '#E5E2DB',
  muted: '#596166',
  line: 'rgba(32,38,42,0.17)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'automotriz-tudela-mecanica-electricidad',
  title: 'Automotriz Tudela — Mecánica y electricidad en Talca',
  description: 'Demo web para Automotriz Tudela, taller de mecánica y electricidad automotriz en Talca.',
})

const LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo llegar', href: '#contacto' },
  { label: 'Horario', href: '#horario' },
]

function WorkshopScene() {
  return (
    <svg viewBox="0 0 900 620" className="w-full h-full" role="img" aria-label="Ilustración de un automóvil dentro de un taller">
      <defs>
        <linearGradient id="at-wall" x1="0" x2="0" y2="1">
          <stop stopColor="#39434A" />
          <stop offset="1" stopColor="#161B1E" />
        </linearGradient>
        <linearGradient id="at-floor" x1="0" x2="1">
          <stop stopColor="#252C30" />
          <stop offset="1" stopColor="#111517" />
        </linearGradient>
      </defs>
      <rect width="900" height="620" fill="url(#at-wall)" />
      <path d="M0 400h900v220H0Z" fill="url(#at-floor)" />
      <path d="M90 115h720v285H90Z" fill="#20272B" stroke="#F0782B" strokeWidth="5" />
      <path d="M140 160h620M140 220h620M140 280h620M140 340h620" stroke="#3B474D" strokeWidth="4" />
      <path d="M140 160V400M270 160V400M400 160V400M530 160V400M660 160V400" stroke="#3B474D" strokeWidth="4" />
      <rect x="325" y="235" width="250" height="115" rx="10" fill="#F0782B" />
      <path d="M360 235 400 190h100l40 45Z" fill="#F3C34F" />
      <path d="M380 225h56v-25h-34Zm82-25v25h58l-22-25Z" fill="#263036" />
      <circle cx="375" cy="350" r="38" fill="#101416" stroke="#D3D7D5" strokeWidth="8" />
      <circle cx="525" cy="350" r="38" fill="#101416" stroke="#D3D7D5" strokeWidth="8" />
      <path d="M40 470h820" stroke="#F0782B" strokeWidth="8" opacity="0.8" />
      <path d="M130 525h165m35 0h165m35 0h165" stroke="#5A6468" strokeWidth="11" strokeLinecap="round" />
      <circle cx="730" cy="85" r="24" fill="#F3C34F" /><path d="M730 35v-20m0 120V115m50-30h20m-120 0h-20" stroke="#F3C34F" strokeWidth="5" />
    </svg>
  )
}

function Icon({ type }: { type: 'wrench' | 'bolt' | 'engine' }) {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {type === 'wrench' && <><path d="M14.7 6.1a4.2 4.2 0 0 0-5.4 5.4L3.5 17.3a2.2 2.2 0 0 0 3.1 3.1l5.8-5.8a4.2 4.2 0 0 0 5.4-5.4l-3 3-2.7-2.7 2.6-3.4Z" /></>}
      {type === 'bolt' && <path d="M13.2 2 5 13h5l-1.2 9L17 10h-5l1.2-8Z" />}
      {type === 'engine' && <><path d="M4 10h4l2-3h5l2 3h3v7h-3l-2 2H8l-2-2H4Z" /><path d="M8 10v5m8-5v5M2 13h2m16 0h2" /></>}
    </svg>
  )
}

export default function AutomotrizTudelaPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={BIZ.short}
        links={LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{ over: 'dark', bar: 'rgba(243,241,236,0.95)', ink: C.ink, line: C.line, btnBg: C.orange, btnInk: '#fff' }}
      />

      <main>
        <section id="inicio" className="relative min-h-svh overflow-hidden flex items-end" style={{ backgroundColor: C.deep }}>
          <div className="absolute inset-0"><WorkshopScene /></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(17,21,23,0.4), rgba(17,21,23,0.18) 38%, rgba(17,21,23,0.94))' }} />
          <div className="relative max-w-6xl w-full mx-auto px-5 md:px-8 pt-32 pb-10 md:pb-16">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] font-bold mb-4" style={{ color: C.yellow }}>Mecánica · Electricidad · Talca</p>
              <h1 className={`${display.className} font-extrabold text-[clamp(2.8rem,9vw,6.4rem)] leading-[0.93] tracking-[-0.05em] text-white max-w-4xl`}>
                Que tu auto
                <br />
                <span style={{ color: C.yellow }}>vuelva a responder.</span>
              </h1>
              <p className="text-base md:text-xl leading-relaxed max-w-xl mt-6 mb-8" style={{ color: 'rgba(255,255,255,0.86)' }}>
                Taller de mecánica y electricidad automotriz en Talca. Cuéntanos qué necesita tu vehículo y coordinamos por WhatsApp.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg text-sm font-bold" style={{ backgroundColor: C.orange, color: '#fff' }}>Consultar por WhatsApp</a>
                <a href="#servicios" className="px-6 py-3 rounded-lg text-sm font-bold border" style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#fff' }}>Ver especialidad</a>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="servicios" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 scroll-mt-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] font-bold mb-4" style={{ color: C.orange }}>Qué hacemos</p>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-6xl tracking-[-0.04em] leading-[0.98] max-w-2xl mb-5`}>Diagnóstico claro. Trabajo de taller.</h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mb-10" style={{ color: C.muted }}>
              La ficha pública identifica a Automotriz Tudela como taller de mecánica y electricidad. La consulta concreta se confirma directamente con el taller.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ['wrench', 'Mecánica automotriz', 'Revisión y reparación de vehículos en taller.'],
              ['bolt', 'Electricidad automotriz', 'Atención para fallas y sistemas eléctricos del vehículo.'],
              ['engine', 'Motores diésel', 'La ficha pública también lo clasifica en reparación de motores diésel.'],
            ].map(([icon, title, text], i) => (
              <Reveal key={title} delay={i * 90}>
                <article className="border rounded-2xl p-6 h-full" style={{ borderColor: C.line, backgroundColor: i === 1 ? C.ink : '#fff' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8" style={{ backgroundColor: i === 1 ? C.orange : '#FFE2C8', color: i === 1 ? '#fff' : C.ink }}><Icon type={icon as 'wrench' | 'bolt' | 'engine'} /></div>
                  <h3 className={`${display.className} font-extrabold text-2xl mb-2`} style={{ color: i === 1 ? '#fff' : C.ink }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: i === 1 ? 'rgba(255,255,255,0.75)' : C.muted }}>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="horario" className="scroll-mt-16" style={{ backgroundColor: C.soft }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1fr_0.8fr] gap-10 items-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] font-bold mb-4" style={{ color: C.orange }}>Antes de venir</p>
              <h2 className={`${display.className} font-extrabold text-4xl md:text-6xl tracking-[-0.04em] leading-[0.98] mb-5`}>Mándanos el síntoma.</h2>
              <p className="text-sm md:text-base leading-relaxed max-w-lg mb-7" style={{ color: C.muted }}>
                Un ruido, un testigo encendido o una falla eléctrica: cuéntanos qué ocurre y coordinamos la atención. No publicamos precios ni trabajos no confirmados.
              </p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-lg text-sm font-bold" style={{ backgroundColor: C.orange, color: '#fff' }}>Enviar consulta por WhatsApp ↗</a>
            </Reveal>
            <Reveal delay={120}>
              <div className="border rounded-2xl p-6" style={{ borderColor: C.line, backgroundColor: '#fff' }}>
                <h3 className={`${display.className} font-extrabold text-2xl mb-5`}>Horario publicado</h3>
                <dl className="text-sm">
                  <div className="flex justify-between gap-4 py-3 border-b" style={{ borderColor: C.line }}><dt>Lunes a viernes</dt><dd className="font-bold">09:00–19:00</dd></div>
                  <div className="flex justify-between gap-4 py-3 border-b" style={{ borderColor: C.line }}><dt>Sábado</dt><dd className="font-bold">Cerrado</dd></div>
                  <div className="flex justify-between gap-4 py-3"><dt>Domingo</dt><dd className="font-bold">Cerrado</dd></div>
                </dl>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contacto" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] font-bold mb-4" style={{ color: C.orange }}>Dónde estamos</p>
              <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl tracking-[-0.04em] leading-[0.98] mb-5`}>{BIZ.address}, <span style={{ color: C.orange }}>{BIZ.city}</span></h2>
              <address className="not-italic text-sm leading-relaxed mb-5" style={{ color: C.muted }}>{BIZ.region}, Chile</address>
              <div className="flex flex-wrap gap-3">
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-lg text-sm font-bold border" style={{ borderColor: C.ink, color: C.ink }}>Abrir en Google Maps ↗</a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-lg text-sm font-bold" style={{ backgroundColor: C.ink, color: '#fff' }}>WhatsApp</a>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="border-l-4 p-6 md:p-8" style={{ borderColor: C.orange, backgroundColor: C.ink, color: '#fff' }}>
                <p className="text-xs uppercase tracking-[0.2em] font-bold mb-4" style={{ color: C.yellow }}>Contacto directo</p>
                <p className={`${display.className} font-extrabold text-3xl mb-3`}>{BIZ.phoneDisplay}</p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.72)' }}>Escríbenos por WhatsApp para consultar por tu vehículo.</p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-3 rounded-lg text-sm font-bold" style={{ backgroundColor: C.orange, color: '#fff' }}>Abrir WhatsApp ↗</a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="px-5 md:px-8 py-8" style={{ backgroundColor: C.deep, color: 'rgba(255,255,255,0.72)' }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 justify-between text-xs">
          <p><strong className="text-white">{BIZ.name}</strong><br />{BIZ.city}, Región del Maule</p>
          <p className="sm:text-right">Demo con escenas ilustradas<br />Datos públicos revisados para esta muestra</p>
        </div>
      </footer>
      <WaFab href={WA_LINK} label="Escribir a Automotriz Tudela por WhatsApp" />
    </div>
  )
}
