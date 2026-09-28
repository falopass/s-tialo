import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, SERVICIOS, HORARIO, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «la orden de trabajo». La página se comporta como la
 * boleta que abre el taller cuando entra un auto: encabezado con franja
 * de seguridad amarilla, ítems numerados en mono y el nombre en
 * condensada de letrero. El amarillo viene de las rampas y la señalética
 * del taller; el azul grafito del letrero AUTOLISTO de la fachada.
 */
const C = {
  ink: '#16181C',
  asphalt: '#1E2126',
  steel: '#2A2E36',
  concrete: '#F0EFEC',
  paper: '#FAF9F6',
  yellow: '#FFC61A',
  blue: '#1F5C9E',
  line: 'rgba(22,24,28,0.16)',
  soft: '#4C525C',
  darkSoft: 'rgba(240,239,236,0.72)',
}

const RAYA = `repeating-linear-gradient(-45deg, ${C.yellow} 0 14px, ${C.ink} 14px 28px)`

export const metadata: Metadata = demoMetadata({
  slug: 'serviteca-autolisto',
  title: `${BIZ.name} · Taller mecánico frente al Mall Plaza Maule`,
  description:
    'Mantención por catálogo, alineación, frenos, tren delantero y cambio de aceite en la 30 Oriente de Talca. Agenda por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#FFD60A' }} aria-hidden="true" />
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

function FranjaSeguridad({ className = '' }: { className?: string }) {
  return <div className={`h-2.5 ${className}`} style={{ backgroundImage: RAYA }} aria-hidden="true" />
}

export default function ServitecaAutolistoPage() {
  return (
    <div className={body.className} style={{ backgroundColor: C.concrete, color: C.ink }}>
      <BlitzNav
        name={
          <span className="uppercase font-bold tracking-wide" style={{ letterSpacing: '0.04em' }}>
            {BIZ.short}
          </span>
        }
        links={[
          { label: 'Servicios', href: '#servicios' },
          { label: 'El taller', href: '#taller' },
          { label: 'Horario', href: '#horario' },
          { label: 'Cómo llegar', href: '#ubicacion' },
        ]}
        waLink={WA_LINK}
        ctaLabel="Agendar hora"
        logoSrc={`${IMG}/logo.webp`}
        fontClass={display.className}
        theme={{ over: 'dark', bar: 'rgba(250,249,246,0.97)', ink: C.ink, line: C.line, btnBg: C.yellow, btnInk: C.ink }}
      />

      {/* Hero: la fachada con sus letreros */}
      <header id="inicio" className="relative min-h-[92svh] flex items-end overflow-hidden" style={{ backgroundColor: C.asphalt }}>
        <Image
          src={`${IMG}/fachada.webp`}
          alt="Fachada de Serviteca Autolisto en la 30 Oriente de Talca"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(12,14,17,0.42) 0%, rgba(12,14,17,0.18) 45%, rgba(12,14,17,0.88) 100%)' }} aria-hidden="true" />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-12 pt-40">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.yellow }}>
              Taller mecánico · Talca
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className={`${display.className} uppercase font-bold leading-[0.92] text-[52px] md:text-[96px] max-w-4xl`} style={{ color: '#FAF9F6' }}>
              El auto entra, <span style={{ color: C.yellow }}>sale listo</span>
            </h1>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-5 max-w-xl text-[15px] md:text-lg leading-relaxed" style={{ color: 'rgba(250,249,246,0.88)' }}>
              En la 30 Oriente 980, {BIZ.referencia}: mantención por catálogo, alineación, frenos, tren delantero y cambio de aceite con marcas reconocidas.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[46px] px-6 rounded-md text-sm font-bold uppercase tracking-wide active:scale-95 transition-transform tap-44"
                style={{ backgroundColor: C.yellow, color: C.ink }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center h-[46px] px-6 rounded-md text-sm font-bold uppercase tracking-wide tap-44"
                style={{ border: '1.5px solid rgba(250,249,246,0.7)', color: '#FAF9F6' }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className={`${mono.className} mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(250,249,246,0.82)' }}>
              <span className="flex items-center gap-2"><Stars value={BIZ.rating} color={C.yellow} className="w-3.5 h-3.5" /> {BIZ.ratingLabel} · {BIZ.reviews} opiniones</span>
              <span>{BIZ.address}</span>
              <span>Lun a sáb</span>
            </div>
          </Reveal>
        </div>
        <FranjaSeguridad className="absolute bottom-0 inset-x-0" />
      </header>

      {/* Orden de trabajo */}
      <section id="servicios" className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="max-w-3xl mx-auto">
              <div className="rounded-t-xl overflow-hidden" style={{ boxShadow: '0 18px 44px rgba(22,24,28,0.18)' }}>
                <div style={{ backgroundColor: C.asphalt }}>
                  <div className="px-6 md:px-8 pt-6 pb-5 flex items-end justify-between gap-4">
                    <div>
                      <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em]`} style={{ color: C.yellow }}>
                        Orden de trabajo
                      </p>
                      <h2 className={`${display.className} uppercase font-bold text-3xl md:text-4xl mt-1`} style={{ color: '#FAF9F6' }}>
                        Lo que se hace en el taller
                      </h2>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG}/logo.webp`} alt="Letrero Autolisto" className="h-8 md:h-10 w-auto rounded" />
                  </div>
                  <FranjaSeguridad />
                </div>
                <div style={{ backgroundColor: C.paper }}>
                  {SERVICIOS.map((s, i) => (
                    <Reveal key={s.n} delay={i * 60}>
                      <div className="flex items-start gap-4 px-6 md:px-8 py-4" style={{ borderTop: i === 0 ? 'none' : `1px dashed ${C.line}` }}>
                        <span className={`${mono.className} text-[12px] font-semibold pt-1 shrink-0`} style={{ color: C.blue }}>
                          {s.n}
                        </span>
                        <div className="flex-1">
                          <p className={`${display.className} uppercase font-semibold text-lg md:text-xl leading-tight`}>{s.nombre}</p>
                          <p className="text-[13px] leading-snug mt-1" style={{ color: C.soft }}>{s.detalle}</p>
                        </div>
                        <span className={`${mono.className} text-[10px] uppercase tracking-[0.14em] pt-1.5 shrink-0 hidden sm:block`} style={{ color: C.soft }}>
                          En taller
                        </span>
                      </div>
                    </Reveal>
                  ))}
                  <div className="px-6 md:px-8 py-4 flex items-center justify-between" style={{ backgroundColor: C.asphalt }}>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(250,249,246,0.8)' }}>
                      ¿Otro problema? Se revisa en el patio
                    </p>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.14em] underline underline-offset-4 tap-44`}
                      style={{ color: C.yellow }}
                    >
                      Consultar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* En el taller */}
      <section id="taller" className="py-12 md:py-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.yellow }}>
              Adentro
            </p>
            <h2 className={`${display.className} uppercase font-bold text-3xl md:text-5xl leading-tight max-w-2xl`} style={{ color: '#FAF9F6' }}>
              Rampas, alineadora y espacio para trabajar
            </h2>
          </Reveal>
          <div className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { src: `${IMG}/taller.webp`, alt: 'Nave del taller con rampas y letrero Autolisto Pirelli', cap: 'La nave' },
              { src: `${IMG}/elevador.webp`, alt: 'Mecánico trabajando bajo un auto en el elevador', cap: 'Elevador' },
              { src: `${IMG}/alineacion.webp`, alt: 'Camioneta en la rampa de alineación del taller', cap: 'Alineación' },
              { src: `${IMG}/rueda.webp`, alt: 'Detalle de una rueda en la máquina de balanceo', cap: 'Balanceo' },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 90}>
                <figure className={`relative overflow-hidden rounded-lg ${i % 2 === 0 ? 'md:translate-y-6' : ''}`} style={{ aspectRatio: i % 2 === 0 ? '4/5' : '4/5' }}>
                  <Image src={f.src} alt={f.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                  <figcaption className="absolute inset-x-0 bottom-0 px-3.5 py-2.5" style={{ background: 'linear-gradient(180deg, transparent, rgba(12,14,17,0.85))' }}>
                    <span className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.yellow }}>
                      {f.cap}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Horario + reseñas */}
      <section id="horario" className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10">
          <Reveal>
            <div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.blue }}>
                Horario de atención
              </p>
              <h2 className={`${display.className} uppercase font-bold text-3xl md:text-4xl leading-tight mb-5`}>
                Cuándo pasar
              </h2>
              <div style={{ borderTop: `1.5px solid ${C.ink}` }}>
                {HORARIO.map((h) => (
                  <div key={h.dias} className="flex items-baseline justify-between gap-4 py-3" style={{ borderBottom: `1px solid ${C.line}` }}>
                    <span className="text-sm font-semibold uppercase tracking-wide">{h.dias}</span>
                    <span className={`${mono.className} text-sm font-medium`} style={{ color: h.horas === 'Cerrado' ? C.soft : C.ink }}>
                      {h.horas}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[13px] leading-relaxed" style={{ color: C.soft }}>
                Domingo cerrado. Para ordenar la entrada al taller, escribe antes por WhatsApp.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.blue }}>
                Dicen en Google
              </p>
              <h2 className={`${display.className} uppercase font-bold text-3xl md:text-4xl leading-tight mb-5`}>
                {BIZ.ratingLabel} de 5 en {BIZ.reviews} opiniones
              </h2>
              <div className="space-y-4">
                {RESENAS.map((r) => (
                  <article key={r.nombre} className="rounded-lg p-5" style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
                    <div className="flex items-center justify-between gap-3 mb-2.5">
                      <Stars value={r.estrellas} color={C.blue} className="w-3.5 h-3.5" />
                      <span className={`${mono.className} text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.soft }}>
                        {r.tema}
                      </span>
                    </div>
                    <p className="text-[14.5px] leading-relaxed">«{r.texto}»</p>
                    <p className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.blue }}>
                      {r.nombre}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ubicación */}
      <section id="ubicacion" className="relative" style={{ backgroundColor: C.steel }}>
        <FranjaSeguridad />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
          <Reveal>
            <div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.yellow }}>
                Cómo llegar
              </p>
              <h2 className={`${display.className} uppercase font-bold text-3xl md:text-[40px] leading-[1.02]`} style={{ color: '#FAF9F6' }}>
                {BIZ.address}, {BIZ.referencia}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.darkSoft }}>
                Por la circunvalación oriente de Talca: el local está en la 30 Oriente, al llegar al Mall Plaza Maule. Entrada amplia para dejar el auto en el taller.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[46px] px-6 rounded-md text-sm font-bold uppercase tracking-wide active:scale-95 transition-transform tap-44"
                  style={{ backgroundColor: C.yellow, color: C.ink }}
                >
                  WhatsApp del taller
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[46px] px-6 rounded-md text-sm font-bold uppercase tracking-wide tap-44"
                  style={{ border: '1.5px solid rgba(250,249,246,0.55)', color: '#FAF9F6' }}
                >
                  Google Maps
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-lg" style={{ border: '1px solid rgba(250,249,246,0.2)' }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full min-h-[300px] h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
        <FranjaSeguridad />
      </section>

      <footer style={{ backgroundColor: C.ink, color: C.concrete }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <div className="flex items-center gap-3 mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/logo.webp`} alt="Letrero de Serviteca Autolisto" className="h-8 w-auto rounded" />
              <p className={`${display.className} uppercase font-bold text-xl leading-tight`}>{BIZ.name}</p>
            </div>
            <address className="not-italic text-xs leading-relaxed" style={{ color: C.darkSoft }}>
              {BIZ.address}, {BIZ.city} · {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              {' · '}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">WhatsApp</a>
              {' · '}
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">Google Maps</a>
            </address>
          </div>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(240,239,236,0.55)' }}>
            {BIZ.ratingLabel} ★ · {BIZ.reviews} opiniones · {BIZ.city}, Chile
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
