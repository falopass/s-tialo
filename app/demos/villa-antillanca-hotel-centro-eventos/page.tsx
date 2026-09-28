import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_URL, WA_LINK } from './content'
import { BlitzNav, Reveal, WaFab } from './chrome'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900' }],
})

const C = {
  ink: '#17352B',
  deep: '#0C211A',
  cream: '#F7F2E9',
  sand: '#E5D3B7',
  gold: '#C38A3A',
  accentText: '#8A5B1F',
  muted: '#52675C',
  line: 'rgba(23,53,43,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'villa-antillanca-hotel-centro-eventos',
  title: 'Villa Antillanca — Hotel y Centro de Eventos en Talca',
  description: 'Demo web para Villa Antillanca, Hotel y Centro de Eventos en Camino a San Clemente, Talca.',
})

const LINKS = [
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Ubicación', href: '#contacto' },
]

function Scene({ compact = false }: { compact?: boolean }) {
  return (
    <svg viewBox="0 0 900 620" className="w-full h-full" role="img" aria-label="Ilustración de un hotel entre jardines y cerros">
      <defs>
        <linearGradient id={compact ? 'va-sky-card' : 'va-sky'} x1="0" x2="0" y2="1">
          <stop stopColor={compact ? '#A8C5B3' : '#7DAA98'} />
          <stop offset="1" stopColor={compact ? '#E7D4B6' : '#DCC29A'} />
        </linearGradient>
        <linearGradient id={compact ? 'va-ground-card' : 'va-ground'} x1="0" x2="0" y2="1">
          <stop stopColor="#617D61" />
          <stop offset="1" stopColor="#1D4733" />
        </linearGradient>
      </defs>
      <rect width="900" height="620" fill={`url(#${compact ? 'va-sky-card' : 'va-sky'})`} />
      <circle cx="700" cy="130" r="54" fill="#F7D58A" opacity="0.9" />
      <path d="M0 340 160 220 300 330 470 180 640 330 800 230 900 300V620H0Z" fill="#527A68" opacity="0.75" />
      <path d="M0 410 200 300 370 410 560 285 740 405 900 330V620H0Z" fill="#315B47" />
      <rect y="450" width="900" height="170" fill={`url(#${compact ? 'va-ground-card' : 'va-ground'})`} />
      <path d="M300 460V300h310v160Z" fill="#F1E3C8" />
      <path d="M280 310h350l-28-45H308Z" fill="#8A5B38" />
      <path d="M330 350h68v73h-68zm101 0h68v73h-68zm101 0h45v73h-45z" fill="#6E9D99" />
      <rect x="270" y="430" width="370" height="23" fill="#D09B55" />
      <path d="M440 460v-120" stroke="#8A5B38" strokeWidth="8" />
      <path d="M110 520c18-92 28-92 46 0m-5 0c18-75 28-75 46 0m-2 0c20-107 30-107 50 0m510 0c17-85 27-85 44 0m-2 0c18-65 28-65 45 0" stroke="#17352B" strokeWidth="15" strokeLinecap="round" />
      {!compact && <path d="M0 560c170-42 280-36 430-5 190 40 310-2 470-35v100H0Z" fill="#123023" />}
    </svg>
  )
}

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

export default function VillaAntillancaPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.cream, color: C.ink }}>
      <BlitzNav
        name={BIZ.short}
        links={LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{ over: 'dark', bar: 'rgba(247,242,233,0.94)', ink: C.ink, line: C.line, btnBg: C.ink, btnInk: C.cream }}
      />

      <main>
        <section id="inicio" className="relative min-h-svh overflow-hidden flex items-end" style={{ backgroundColor: C.deep }}>
          <div className="absolute inset-0"><Scene /></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(12,33,26,0.35), rgba(12,33,26,0.15) 40%, rgba(12,33,26,0.9))' }} />
          <div className="relative max-w-6xl w-full mx-auto px-5 md:px-8 pt-32 pb-10 md:pb-16">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] font-bold mb-4" style={{ color: '#F4D798' }}>Talca · Maule</p>
              <h1 className={`${display.className} text-[clamp(2.9rem,9vw,6.6rem)] leading-[0.95] tracking-[-0.03em] text-white max-w-4xl`}>
                Un lugar para
                <br />
                <span style={{ color: '#F4D798' }}>quedarse y celebrar.</span>
              </h1>
              <p className="text-base md:text-xl leading-relaxed max-w-xl mt-6 mb-8" style={{ color: 'rgba(255,255,255,0.86)' }}>
                Hotel y centro de eventos en Camino a San Clemente, con una experiencia rodeada de jardines, piscina y espacios para reunirse.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full text-sm font-bold" style={{ backgroundColor: '#C38A3A', color: '#10261D' }}>Consultar por WhatsApp</a>
                <a href="#experiencia" className="px-6 py-3 rounded-full text-sm font-bold border" style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#fff' }}>Conocer el lugar</a>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="experiencia" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 scroll-mt-16">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] font-bold mb-4" style={{ color: C.accentText }}>La experiencia</p>
              <h2 className={`${display.className} text-4xl md:text-6xl leading-[1] mb-5`}>Hospitalidad con aire de campo.</h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                Villa Antillanca combina hospedaje y espacios para eventos en una ubicación real de Talca, camino a San Clemente. Esta propuesta visual usa escenas ilustradas: no reemplaza las fotografías del lugar.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ['Hospedaje', 'Un punto de descanso en Talca.'],
                ['Centro de eventos', 'Espacios para encuentros y celebraciones.'],
                ['Bar y restaurante', 'Servicios gastronómicos registrados en fichas públicas.'],
                ['Piscina y jardines', 'Áreas exteriores mencionadas en directorios públicos.'],
              ].map(([title, text], i) => (
                <Reveal key={title} delay={i * 80}>
                  <article className="p-5 md:p-6 border rounded-2xl h-full" style={{ borderColor: C.line, backgroundColor: i % 2 ? '#EFE5D5' : '#FFF9F0' }}>
                    <span className="text-xs font-bold" style={{ color: C.gold }}>0{i + 1}</span>
                    <h3 className={`${display.className} text-2xl mt-8 mb-2`}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="eventos" className="scroll-mt-16" style={{ backgroundColor: C.ink }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] font-bold mb-4" style={{ color: '#F4D798' }}>Eventos</p>
              <h2 className={`${display.className} text-4xl md:text-6xl leading-[1] text-white mb-5`}>Un escenario para tu próxima fecha.</h2>
              <p className="text-sm md:text-base leading-relaxed max-w-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Consulta por disponibilidad, alojamiento y condiciones directamente con el equipo. La información de cada evento se confirma por WhatsApp.
              </p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full text-sm font-bold" style={{ backgroundColor: '#C38A3A', color: '#10261D' }}>Hablar con Villa Antillanca <Arrow /></a>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-3xl overflow-hidden aspect-[4/3]" style={{ backgroundColor: '#315B47' }}><Scene compact /></div>
            </Reveal>
          </div>
        </section>

        <section id="contacto" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] font-bold mb-4" style={{ color: C.accentText }}>Dónde estamos</p>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1] mb-5`}>{BIZ.address}, <span style={{ color: C.accentText }}>{BIZ.city}</span></h2>
              <address className="not-italic text-sm leading-relaxed mb-5" style={{ color: C.muted }}>{BIZ.region}, Chile<br />Atención informada públicamente: {BIZ.hours}.</address>
              <div className="flex flex-wrap gap-3">
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-full text-sm font-bold border" style={{ borderColor: C.ink, color: C.ink }}>Abrir en Google Maps <Arrow /></a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-full text-sm font-bold" style={{ backgroundColor: C.ink, color: C.cream }}>WhatsApp</a>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="border rounded-2xl p-5 md:p-7" style={{ borderColor: C.line, backgroundColor: '#FFF9F0' }}>
                <h3 className={`${display.className} text-2xl mb-3`}>¿Quieres reservar o cotizar un evento?</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>Escribe por WhatsApp con la fecha, cantidad de personas y tipo de consulta.</p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="block text-center px-5 py-3 rounded-full text-sm font-bold" style={{ backgroundColor: C.gold, color: '#10261D' }}>Escribir ahora <Arrow /></a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="px-5 md:px-8 py-8" style={{ backgroundColor: C.deep, color: 'rgba(255,255,255,0.72)' }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 justify-between text-xs">
          <p><strong className="text-white">{BIZ.name}</strong><br />Talca, Región del Maule</p>
          <p className="sm:text-right">Demo con escenas ilustradas<br />Datos públicos revisados para esta muestra</p>
        </div>
      </footer>
      <WaFab href={WA_LINK} label="Escribir a Villa Antillanca por WhatsApp" />
    </div>
  )
}
