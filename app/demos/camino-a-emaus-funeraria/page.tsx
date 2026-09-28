import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, SERVICIOS, DATOS, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
})
const displayItalic = localFont({
  src: [{ path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/lato/normal-300.woff2', weight: '300', style: 'normal' },
    { path: '../../fonts/lato/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/lato/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «la tarjeta de memoria». Una sola columna solemne
 * sobre negro humo, con la tipografía serifada dorada del propio logo
 * (el árbol sobre el libro abierto) y filetes finos de programa de
 * funeral. Las fotos van en marcos de papel, como las tarjetas que la
 * casa reparte. Todo el brillo viene del dorado del emblema.
 */
const C = {
  night: '#0E0D0B',
  charcoal: '#16140F',
  gold: '#C9A227',
  goldSoft: '#E4C55B',
  ivory: '#F2EDE0',
  ivorySoft: 'rgba(242,237,224,0.72)',
  line: 'rgba(201,162,39,0.28)',
}

const FILETE = `linear-gradient(90deg, transparent, ${C.gold}, transparent)`

export const metadata: Metadata = demoMetadata({
  slug: 'camino-a-emaus-funeraria',
  title: `${BIZ.name} · Servicios funerarios en Talca, 24 horas`,
  description:
    'Servicios funerarios en Talca, antes Funeraria Sendero. Atención las 24 horas, traslados a regiones, gestión de trámites y convenios de previsión.',
  image: `${IMG}/arte.webp`,
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

function Filete() {
  return <div className="h-px w-24 mx-auto" style={{ backgroundImage: FILETE }} aria-hidden="true" />
}

export default function CaminoAEmausPage() {
  return (
    <div className={body.className} style={{ backgroundColor: C.night, color: C.ivory }}>
      <BlitzNav
        name={<span style={{ letterSpacing: '0.14em' }}>{BIZ.name}</span>}
        links={[
          { label: 'Servicios', href: '#servicios' },
          { label: 'El lugar', href: '#lugar' },
          { label: 'Familias', href: '#familias' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={WA_LINK}
        ctaLabel="24 horas"
        logoSrc={`${IMG}/logo.webp`}
        fontClass={display.className}
        theme={{ over: 'dark', bar: 'rgba(14,13,11,0.94)', ink: C.ivory, line: C.line, btnBg: C.gold, btnInk: '#141109' }}
      />

      {/* Portada memorial: emblema y nombre */}
      <header id="inicio" className="relative pt-32 pb-14 md:pt-40 md:pb-20" style={{ backgroundColor: C.night }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <div className="mx-auto w-[240px] md:w-[300px]">
              <Image
                src={`${IMG}/logo.webp`}
                alt="Emblema de Camino a Emaús: un árbol dorado sobre un libro abierto"
                width={630}
                height={340}
                priority
                className="w-full h-auto"
              />
            </div>
          </Reveal>
          <Reveal delay={110}>
            <p className={`${displayItalic.className} mt-6 text-lg md:text-xl`} style={{ color: C.goldSoft }}>
              {BIZ.antes} · {BIZ.city}
            </p>
          </Reveal>
          <Reveal delay={190}>
            <h1 className={`${display.className} mt-4 text-[38px] md:text-6xl font-medium leading-[1.04]`}>
              Acompañar cuando más se necesita
            </h1>
          </Reveal>
          <Reveal delay={270}>
            <p className="mt-5 max-w-xl mx-auto text-[15px] md:text-base leading-relaxed" style={{ color: C.ivorySoft }}>
              En la 1 Norte 2103 de Talca, el equipo que fue Funeraria Sendero atiende a las familias a cualquier hora: traslados, trámites y velorio, con la calma que el momento pide.
            </p>
          </Reveal>
          <Reveal delay={350}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[46px] px-7 text-sm font-semibold tracking-wide active:scale-95 transition-transform tap-44"
                style={{ backgroundColor: C.gold, color: '#141109' }}
              >
                Hablar ahora por WhatsApp
              </a>
              <span className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.goldSoft }}>
                Abierto las 24 horas
              </span>
            </div>
          </Reveal>
          <Reveal delay={420}>
            <div className={`${mono.className} mt-9 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.ivorySoft }}>
              <Stars value={BIZ.rating} color={C.goldSoft} className="w-3.5 h-3.5" />
              <span>{BIZ.ratingLabel} · {BIZ.reviews} opiniones</span>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Arte del camino a Emaús: su propio afiche */}
      <section className="pb-14 md:pb-20" style={{ backgroundColor: C.night }}>
        <Reveal>
          <div className="max-w-4xl mx-auto px-5 md:px-8">
            <div className="p-2.5" style={{ backgroundColor: C.ivory }}>
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9.4' }}>
                <Image
                  src={`${IMG}/arte.webp`}
                  alt="Afiche de Camino a Emaús: tres caminantes en un sendero al atardecer"
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
            </div>
            <p className={`${mono.className} mt-3 text-center text-[10px] uppercase tracking-[0.24em]`} style={{ color: C.goldSoft }}>
              «El camino que se recorre juntos»
            </p>
          </div>
        </Reveal>
      </section>

      {/* Servicios: programa solemne a una columna */}
      <section id="servicios" className="py-12 md:py-18 pb-14 md:pb-20" style={{ backgroundColor: C.charcoal }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.28em] mb-4`} style={{ color: C.goldSoft }}>
                Cómo ayudan
              </p>
              <h2 className={`${display.className} text-3xl md:text-5xl font-medium`}>
                Un equipo que se ocupa de todo
              </h2>
              <div className="mt-5"><Filete /></div>
            </div>
          </Reveal>
          <div>
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.nombre} delay={i * 70}>
                <div className="py-6 md:py-7 text-center" style={{ borderTop: `1px solid ${C.line}` }}>
                  <h3 className={`${display.className} text-2xl md:text-[27px] font-medium`}>{s.nombre}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed max-w-lg mx-auto" style={{ color: C.ivorySoft }}>
                    {s.detalle}
                  </p>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: `1px solid ${C.line}` }} aria-hidden="true" />
          </div>
          <Reveal delay={200}>
            <div className="mt-8 grid sm:grid-cols-3 gap-px" style={{ backgroundColor: C.line }}>
              {DATOS.map((d) => (
                <div key={d.k} className="px-4 py-4 text-center" style={{ backgroundColor: C.charcoal }}>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.goldSoft }}>{d.k}</p>
                  <p className="mt-1.5 text-[13px] leading-snug" style={{ color: C.ivory }}>{d.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* El lugar: fachada, velorio y carrozas */}
      <section id="lugar" className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.28em] mb-4`} style={{ color: C.goldSoft }}>
                El lugar y la flota
              </p>
              <h2 className={`${display.className} text-3xl md:text-5xl font-medium`}>
                En la 1 Norte 2103, casa y carroza propias
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: `${IMG}/fachada.webp`, alt: 'Local de la funeraria con letrero abierto 24 horas y convenios' },
              { src: `${IMG}/velatorio.webp`, alt: 'Sala de velación preparada con arreglos florales y velas' },
              { src: `${IMG}/carroza-flores.webp`, alt: 'Carroza fúnebre blanca coronada de flores' },
              { src: `${IMG}/carroza-iglesia.webp`, alt: 'Carroza fúnebre frente a una iglesia' },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 90}>
                <div className="p-1.5" style={{ backgroundColor: C.ivory }}>
                  <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                    <Image src={f.src} alt={f.alt} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Familias: lo que escriben */}
      <section id="familias" className="py-14 md:py-20" style={{ backgroundColor: C.charcoal }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.28em] mb-4`} style={{ color: C.goldSoft }}>
                Las familias
              </p>
              <h2 className={`${display.className} text-3xl md:text-5xl font-medium`}>
                {BIZ.ratingLabel} de 5 en Google, en {BIZ.reviews} opiniones
              </h2>
              <div className="mt-5"><Filete /></div>
            </div>
          </Reveal>
          <div className="space-y-8">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 70}>
                <blockquote className="text-center">
                  <p className={`${displayItalic.className} text-[19px] md:text-[23px] leading-snug`} style={{ color: C.ivory }}>
                    «{r.texto}»
                  </p>
                  <footer className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.22em]`} style={{ color: C.goldSoft }}>
                    {r.nombre} · {r.hace} · 5 estrellas
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación + contacto */}
      <section id="ubicacion" className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.28em] mb-4`} style={{ color: C.goldSoft }}>
                Siempre disponibles
              </p>
              <h2 className={`${display.className} text-3xl md:text-[44px] font-medium leading-[1.08]`}>
                {BIZ.address}, {BIZ.city}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.ivorySoft }}>
                El local atiende las 24 horas, todos los días, con entrada y estacionamiento accesibles para silla de ruedas. Si necesitas orientación ahora, escribe directo al WhatsApp.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[46px] px-7 text-sm font-semibold tracking-wide active:scale-95 transition-transform tap-44"
                  style={{ backgroundColor: C.gold, color: '#141109' }}
                >
                  WhatsApp 24 horas
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[46px] px-7 text-sm font-semibold tracking-wide tap-44"
                  style={{ border: `1px solid ${C.line}`, color: C.ivory }}
                >
                  Cómo llegar
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="p-2" style={{ backgroundColor: C.ivory }}>
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
      </section>

      <footer style={{ backgroundColor: '#0A0908', borderTop: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <div className="flex items-center gap-3 mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/logo.webp`} alt="Emblema de Camino a Emaús" className="h-9 w-auto" />
              <div>
                <p className={`${display.className} text-lg leading-tight`}>{BIZ.nameLegal}</p>
                <p className={`${displayItalic.className} text-[12px]`} style={{ color: C.goldSoft }}>{BIZ.antes}</p>
              </div>
            </div>
            <address className="not-italic text-xs leading-relaxed" style={{ color: C.ivorySoft }}>
              {BIZ.address}, {BIZ.city} · {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              {' · '}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">WhatsApp</a>
              {' · '}
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">Facebook</a>
            </address>
          </div>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(242,237,224,0.5)' }}>
            {BIZ.ratingLabel} ★ · {BIZ.reviews} opiniones · 24 horas
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
