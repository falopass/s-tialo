import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, CARTA, PACKS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/sora/normal-100-800.woff2', weight: '100 800', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «la carta del séptimo piso». Su logo real es un
 * monograma BS dorado sobre negro — la página toma ese lujo de barbería
 * clásica: fondo carbón, oro viejo y la carta de precios como carta de
 * restaurante (puntos guía, precio a la derecha). Marcellus replica la
 * serif de su logo.
 */
const C = {
  negro: '#12100C',
  panel: '#1A1710',
  oro: '#C8A24B',
  oroSuave: '#E3C77F',
  papel: '#F1EAD8',
  suave: 'rgba(241,234,216,0.62)',
  linea: 'rgba(200,162,75,0.28)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'barberia-status',
  title: `${BIZ.name} · Barbería en el centro de Talca`,
  description:
    'Corte VIP $19.000, ritual de barba y limpieza facial en 30 Oriente 1546, piso 7. 4,9 en Google. Agenda por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: '#0B0A08', color: '#F1EAD8' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: C.oro }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            Sitiazo
          </a>{' '}
          para {BIZ.name}, así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

function LineaOro() {
  return <div className="h-px w-full" style={{ backgroundImage: `linear-gradient(90deg, transparent, ${C.oro}, transparent)` }} aria-hidden="true" />
}

export default function BarberiaStatusPage() {
  return (
    <div className={body.className} style={{ backgroundColor: C.negro, color: C.papel }}>
      <BlitzNav
        name={<span className={`${display.className} tracking-wide uppercase`}>Barbería <span style={{ color: C.oro }}>Status</span></span>}
        links={[
          { label: 'La carta', href: '#carta' },
          { label: 'Packs', href: '#packs' },
          { label: 'El barbero', href: '#barbero' },
          { label: 'Llegar', href: '#llegar' },
        ]}
        waLink={WA_LINK}
        ctaLabel="Agendar"
        logoSrc={`${IMG}/logo.webp`}
        theme={{ over: 'dark', bar: 'rgba(18,16,12,0.96)', ink: C.papel, line: C.linea, btnBg: C.oro, btnInk: '#12100C' }}
      />

      {/* Portada: monograma y el salón */}
      <header id="inicio" className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.32em]`} style={{ color: C.oro }}>
                {BIZ.rubro} · piso 7 · {BIZ.city}
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className={`${display.className} text-[42px] md:text-[60px] leading-[1.04] mt-5`}>
                El sillón es tuyo,{' '}
                <span style={{ color: C.oro }}>el tiempo también</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-[15px] leading-relaxed max-w-md" style={{ color: C.suave }}>
                {BIZ.slogan}. Una barbería de oficina en pleno centro, con la carta
                completa: corte VIP, ritual de barba y limpiezas faciales.
              </p>
            </Reveal>
            <Reveal delay={210}>
              <div className="mt-5 flex items-center gap-3">
                <Stars value={BIZ.rating} color={C.oro} className="w-4 h-4" />
                <span className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.suave }}>
                  {BIZ.ratingLabel} en Google · {BIZ.agendaRating} con {BIZ.agendaReviews} reseñas en su agenda
                </span>
              </div>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} inline-flex items-center justify-center h-[48px] px-7 text-[13px] font-medium uppercase tracking-[0.12em] rounded-full active:scale-95 transition-transform tap-44`}
                  style={{ backgroundColor: C.oro, color: '#12100C' }}
                >
                  Agendar hora
                </a>
                <a
                  href="#carta"
                  className={`${mono.className} inline-flex items-center justify-center h-[48px] px-6 text-[12.5px] font-medium uppercase tracking-[0.12em] rounded-full tap-44`}
                  style={{ border: `1.5px solid ${C.oro}`, color: C.oro }}
                >
                  Ver la carta
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <figure className="relative">
              <div className="relative aspect-[5/4] overflow-hidden rounded-sm" style={{ border: `1px solid ${C.linea}` }}>
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Interior de Barbería Status en blanco y negro: sillones de barbero blancos frente a los espejos"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <figcaption className={`${mono.className} mt-2.5 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.suave }}>
                El salón — foto de su página de agenda
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </header>

      <LineaOro />

      {/* La carta de servicios, como carta de restaurante */}
      <section id="carta" className="py-12 md:py-16" style={{ backgroundColor: C.panel }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.32em] mb-3`} style={{ color: C.oro }}>
                Carta de servicios · precios publicados
              </p>
              <h2 className={`${display.className} text-3xl md:text-[44px] leading-[1.05]`}>Lo que pides en el sillón</h2>
            </div>
          </Reveal>
          <div>
            {CARTA.map((s, i) => (
              <Reveal key={s.nombre} delay={i * 50}>
                <div className="py-4">
                  <div className="flex items-baseline gap-3">
                    <h3 className={`${display.className} text-lg md:text-xl`}>{s.nombre}</h3>
                    <span className="flex-1 border-b border-dotted" style={{ borderColor: C.linea }} aria-hidden="true" />
                    <span className={`${mono.className} text-[11px] uppercase tracking-[0.1em] shrink-0`} style={{ color: C.suave }}>
                      {s.tiempo}
                    </span>
                    <span className={`${display.className} text-lg md:text-xl shrink-0`} style={{ color: C.oro }}>
                      {s.precio}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed pr-16" style={{ color: C.suave }}>
                    {s.detalle}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packs */}
      <section id="packs" className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.32em] mb-3`} style={{ color: C.oro }}>
              La experiencia completa
            </p>
            <h2 className={`${display.className} text-3xl md:text-[40px] leading-[1.05] mb-9`}>Tres niveles, un sillón</h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {PACKS.map((p, i) => (
              <Reveal key={p.nombre} delay={i * 80}>
                <div
                  className="h-full rounded-sm p-6 flex flex-col"
                  style={{
                    backgroundColor: C.panel,
                    border: `1px solid ${i === 2 ? C.oro : C.linea}`,
                  }}
                >
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em]`} style={{ color: C.oro }}>
                    Pack {['III', 'IV', 'V'][i]}
                  </p>
                  <h3 className={`${display.className} text-2xl mt-2`}>{p.nombre}</h3>
                  <p className={`${display.className} text-3xl mt-4`} style={{ color: C.oroSuave }}>{p.precio}</p>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mt-1`} style={{ color: C.suave }}>
                    {p.tiempo}
                  </p>
                  <p className="text-[13px] leading-relaxed mt-4 flex-1" style={{ color: C.suave }}>
                    {p.detalle}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center justify-center h-[46px] px-7 text-[12.5px] font-medium uppercase tracking-[0.12em] rounded-full active:scale-95 transition-transform tap-44`}
                style={{ backgroundColor: C.oro, color: '#12100C' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href={BIZ.agenda}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center justify-center h-[46px] px-6 text-[12.5px] font-medium uppercase tracking-[0.12em] rounded-full tap-44`}
                style={{ border: `1.5px solid ${C.oro}`, color: C.oro }}
              >
                Agenda online
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* El barbero */}
      <section id="barbero" className="py-12 md:py-16" style={{ backgroundColor: C.panel }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 items-center">
          <Reveal>
            <div className="relative aspect-square max-w-[340px] overflow-hidden rounded-sm" style={{ border: `1px solid ${C.linea}` }}>
              <Image
                src={`${IMG}/post1.webp`}
                alt="Afiche de Barbería Status con aviso de referencias, pagos en efectivo y planes mensuales"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 340px"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.32em] mb-4`} style={{ color: C.oro }}>
                El barbero
              </p>
              <h2 className={`${display.className} text-3xl md:text-[40px] leading-[1.05]`}>
                {BIZ.barbero}, a.k.a. Johan Barbero
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.suave }}>
                Atención {BIZ.horario.toLowerCase()}, con planes mensuales desde 4 servicios
                y tarifa especial para los que hacen del corte una rutina.
              </p>
              <p className="mt-3 text-[13px]" style={{ color: C.suave }}>
                <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 tap-44" style={{ color: C.oro }}>
                  @barberia.status en Instagram
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Llegar */}
      <section id="llegar" className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.32em] mb-4`} style={{ color: C.oro }}>
                Cómo llegar
              </p>
              <h2 className={`${display.className} text-3xl md:text-[40px] leading-[1.05]`}>
                Séptimo piso, 30 Oriente
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.suave }}>
                {BIZ.address}, en pleno centro de {BIZ.city}. Sube al ascensor hasta el piso 7,
                oficina 708.
              </p>
              <div className={`${mono.className} mt-6 space-y-2.5 text-[12px] uppercase tracking-[0.14em]`} style={{ color: C.suave }}>
                <p><span style={{ color: C.oro }}>DIR&nbsp;&nbsp;</span>{BIZ.address} · {BIZ.city}</p>
                <p>
                  <span style={{ color: C.oro }}>TEL&nbsp;&nbsp;</span>
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-4 tap-44">{BIZ.phoneDisplay}</a>
                </p>
                <p><span style={{ color: C.oro }}>HRS&nbsp;&nbsp;</span>{BIZ.horario}</p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} inline-flex items-center justify-center h-[46px] px-6 text-[12.5px] font-medium uppercase tracking-[0.12em] rounded-full active:scale-95 transition-transform tap-44`}
                  style={{ backgroundColor: C.oro, color: '#12100C' }}
                >
                  Agendar hora
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} inline-flex items-center justify-center h-[46px] px-6 text-[12.5px] font-medium uppercase tracking-[0.12em] rounded-full tap-44`}
                  style={{ border: `1.5px solid ${C.oro}`, color: C.oro }}
                >
                  Cómo llegar
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-sm overflow-hidden" style={{ border: `1px solid ${C.linea}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full min-h-[320px] h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <footer style={{ backgroundColor: '#0B0A08' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado */}
            <img src={`${IMG}/logo.webp`} alt="Logo de Barbería Status" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <p className={`${display.className} text-lg leading-tight uppercase`}>{BIZ.name}</p>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-0.5`} style={{ color: C.oro }}>
                {BIZ.horario} · {BIZ.city}
              </p>
            </div>
          </div>
          <address className="not-italic text-xs leading-relaxed" style={{ color: C.suave }}>
            {BIZ.address}, {BIZ.city}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            {' · '}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">WhatsApp</a>
            {' · '}
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">Instagram</a>
          </address>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.suave }}>
            {BIZ.ratingLabel} ★ en Google
          </p>
        </div>
        <SitiazoStrip />
      </footer>

      <WaFab href={WA_LINK} label="Agendar hora" />
    </div>
  )
}
