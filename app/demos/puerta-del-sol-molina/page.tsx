import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, AMENIDADES, ESPACIOS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «la puerta del sol». El hostal es un edificio
 * amarillo entre árboles en la calle Aromo: mostaza del muro, verde
 * del jardín y un arco de sol naciente como motivo (la puerta arqueada
 * del acceso). Fraunces de postal veraniega sobre papel crema.
 */
const C = {
  papel: '#F7F1E3',
  crema: '#EFE7D3',
  sol: '#C9852B',
  solSuave: '#E8B563',
  hoja: '#3D5A3A',
  tinta: '#241A12',
  suave: 'rgba(36,26,18,0.68)',
  linea: 'rgba(36,26,18,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'puerta-del-sol-molina',
  title: `${BIZ.name} · Hostal y departamentos en Molina`,
  description:
    'Hostal con piscina, jardín, terraza y departamentos con cocina en Calle Aromo 1576, Molina. 5,0 en Google. Reserva por WhatsApp.',
  image: `${IMG}/entrada.webp`,
})

function Sol({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 24" className={className} aria-hidden="true" fill="none">
      <path d="M4 24a20 20 0 0 1 40 0" stroke={C.sol} strokeWidth="2.5" />
      <path d="M24 4V0M10 8L7 5M38 8l3-3M14 24h-8M42 24h-8" stroke={C.sol} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: '#1B140E', color: '#F7F1E3' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: C.sol }} aria-hidden="true" />
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

export default function PuertaDelSolPage() {
  return (
    <div className={body.className} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <BlitzNav
        name={
          <span className="flex items-center gap-2">
            <Sol className="h-[18px] w-9" />
            <span className={`${display.className} text-lg`}>Puerta del Sol</span>
          </span>
        }
        links={[
          { label: 'Espacios', href: '#espacios' },
          { label: 'Qué incluye', href: '#incluye' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={WA_LINK}
        ctaLabel="Reservar"
        theme={{ over: 'dark', bar: 'rgba(247,241,227,0.96)', ink: C.tinta, line: C.linea, btnBg: C.hoja, btnInk: '#F7F1E3' }}
      />

      {/* Portada: la entrada con letrero */}
      <header id="inicio" className="relative">
        <div className="relative min-h-[74svh] flex items-end">
          <Image
            src={`${IMG}/entrada.webp`}
            alt="Entrada del hostal Puerta del Sol Molina entre árboles, con su letrero de reservas"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(20,14,8,0.35) 0%, rgba(20,14,8,0) 38%, rgba(20,14,8,0.78) 100%)' }} aria-hidden="true" />
          <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-12 pt-36">
            <Reveal>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] text-white/85`}>
                {BIZ.rubro} · {BIZ.city}, {BIZ.region}
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className={`${display.className} text-[44px] md:text-[64px] leading-[1.02] text-white mt-4 max-w-xl`}>
                La casa amarilla detrás del portón
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-5 flex items-center gap-3 text-white">
                <Stars value={BIZ.rating} color={C.solSuave} className="w-4 h-4" />
                <span className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`}>{BIZ.ratingLabel} en Google</span>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} inline-flex items-center justify-center h-[48px] px-7 text-[13px] font-medium uppercase tracking-[0.12em] rounded-full active:scale-95 transition-transform tap-44`}
                  style={{ backgroundColor: C.sol, color: '#241A12' }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href="#espacios"
                  className={`${mono.className} inline-flex items-center justify-center h-[48px] px-6 text-[12.5px] font-medium uppercase tracking-[0.12em] rounded-full tap-44`}
                  style={{ border: '1.5px solid rgba(255,255,255,0.6)', color: '#fff' }}
                >
                  Ver los espacios
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      {/* Ficha de alojamiento */}
      <section id="incluye" className="py-12 md:py-16" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex items-end justify-between gap-6 mb-8">
              <div>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-3`} style={{ color: C.sol }}>
                  Qué incluye la estadía
                </p>
                <h2 className={`${display.className} text-3xl md:text-[42px] leading-[1.05]`}>
                  De la piscina al quincho
                </h2>
              </div>
              <Sol className="h-6 w-12 shrink-0 hidden sm:block" />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px rounded-lg overflow-hidden" style={{ backgroundColor: C.linea }}>
            {AMENIDADES.map((a, i) => (
              <Reveal key={a} delay={i * 50}>
                <div className="h-full px-5 py-5 flex items-start gap-3" style={{ backgroundColor: C.crema }}>
                  <span className={`${mono.className} text-[10px] pt-1 shrink-0`} style={{ color: C.sol }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[14.5px] font-medium leading-snug">{a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className={`${mono.className} mt-4 text-[10.5px] uppercase tracking-[0.16em]`} style={{ color: C.suave }}>
              Según su publicación en Booking.com
            </p>
          </Reveal>
        </div>
      </section>

      {/* Los espacios, foto a foto */}
      <section id="espacios" className="py-12 md:py-16" style={{ backgroundColor: '#241A12' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-3`} style={{ color: C.solSuave }}>
              Los espacios
            </p>
            <h2 className={`${display.className} text-3xl md:text-[42px] leading-[1.05] text-white mb-10`}>
              Patio, terraza y las piezas
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {ESPACIOS.map((e, i) => (
              <Reveal key={e.src} delay={(i % 2) * 80}>
                <figure className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                    <Image
                      src={e.src}
                      alt={e.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption className="pt-3 pb-1">
                    <p className={`${display.className} text-lg text-white leading-snug`}>{e.nombre}</p>
                    <p className="text-[13.5px] mt-1 leading-relaxed" style={{ color: 'rgba(247,241,227,0.62)' }}>
                      {e.detalle}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section id="ubicacion" className="py-12 md:py-16" style={{ backgroundColor: C.papel }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.sol }}>
                Dónde queda
              </p>
              <h2 className={`${display.className} text-3xl md:text-[40px] leading-[1.05]`}>
                {BIZ.address}, {BIZ.city}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.suave }}>
                Molina está sobre la Ruta 5 Sur, puerta de entrada a Radal Siete Tazas y la cordillera maulina.
                El hostal queda en un barrio residencial, a minutos del centro.
              </p>
              <div className={`${mono.className} mt-6 space-y-2.5 text-[12px] uppercase tracking-[0.14em]`} style={{ color: C.suave }}>
                <p>
                  <span style={{ color: C.sol }}>DIR&nbsp;&nbsp;</span>{BIZ.address} · {BIZ.city}
                </p>
                <p>
                  <span style={{ color: C.sol }}>TEL&nbsp;&nbsp;</span>
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-4 tap-44">{BIZ.phoneDisplay}</a>
                </p>
                <p>
                  <span style={{ color: C.sol }}>WEB&nbsp;&nbsp;</span>
                  <a href={BIZ.booking} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 tap-44">Booking.com</a>
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} inline-flex items-center justify-center h-[46px] px-6 text-[12.5px] font-medium uppercase tracking-[0.12em] rounded-full active:scale-95 transition-transform tap-44`}
                  style={{ backgroundColor: C.hoja, color: '#F7F1E3' }}
                >
                  Consultar disponibilidad
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} inline-flex items-center justify-center h-[46px] px-6 text-[12.5px] font-medium uppercase tracking-[0.12em] rounded-full tap-44`}
                  style={{ border: `1.5px solid ${C.tinta}`, color: C.tinta }}
                >
                  Cómo llegar
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-lg overflow-hidden" style={{ border: `1px solid ${C.linea}` }}>
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

      <footer style={{ backgroundColor: '#1B140E', color: '#F7F1E3' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sol className="h-5 w-10" />
            <div>
              <p className={`${display.className} text-lg leading-tight`}>{BIZ.name}</p>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-0.5`} style={{ color: C.solSuave }}>
                {BIZ.rubro} · {BIZ.city}
              </p>
            </div>
          </div>
          <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(247,241,227,0.62)' }}>
            {BIZ.address}, {BIZ.city}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            {' · '}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">WhatsApp</a>
          </address>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(247,241,227,0.55)' }}>
            {BIZ.ratingLabel} ★ en Google
          </p>
        </div>
        <SitiazoStrip />
      </footer>

      <WaFab href={WA_LINK} label="Reservar por WhatsApp" />
    </div>
  )
}
