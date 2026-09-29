import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
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
 * Dirección de arte: «el bastón de barrio». Basics no publica fotos ni
 * logo (su única imagen en Maps es de otra barbería, su AgendaPro está
 * caído), así que la identidad es tipográfica: Barlow Condensed enorme
 * y una banda diagonal rojo/azul como el bastón clásico de barbería,
 * sobre crema de papel. Sin fotos inventadas.
 */
const C = {
  crema: '#F3EDE2',
  papel: '#FBF8F1',
  azul: '#1E3A5F',
  rojo: '#B4372F',
  tinta: '#1B1A17',
  suave: 'rgba(27,26,23,0.66)',
  linea: 'rgba(27,26,23,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'basics-salon-masculino',
  title: `${BIZ.name} · Barbería en Molina`,
  description:
    'Barbería para hombre en Luis Cruz Martínez 1873, Molina. 4,4 en Google. Agenda tu hora por WhatsApp.',
})

function Baston({ className = '', reverse = false }: { className?: string; reverse?: boolean }) {
  return (
    <div
      className={`h-3 w-full ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage: `repeating-linear-gradient(${reverse ? -45 : 45}deg, ${C.rojo} 0 14px, ${C.papel} 14px 28px, ${C.azul} 28px 42px, ${C.papel} 42px 56px)`,
      }}
    />
  )
}

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: '#141310', color: C.crema }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: C.rojo }} aria-hidden="true" />
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

export default function BasicsSalonPage() {
  return (
    <div className={body.className} style={{ backgroundColor: C.crema, color: C.tinta }}>
      <BlitzNav
        name={
          <span className={`${display.className} text-xl font-extrabold uppercase tracking-wide`}>
            Basics <span style={{ color: C.rojo }}>·</span> Molina
          </span>
        }
        links={[
          { label: 'Servicios', href: '#servicios' },
          { label: 'Llegar', href: '#llegar' },
        ]}
        waLink={WA_LINK}
        ctaLabel="Agendar"
        theme={{ over: 'light', bar: 'rgba(251,248,241,0.96)', ink: C.tinta, line: C.linea, btnBg: C.azul, btnInk: '#FBF8F1' }}
      />

      {/* Portada tipográfica */}
      <header id="inicio" className="pt-[68px]">
        <Baston />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-14 pb-12 md:pt-20 md:pb-16">
          <Reveal>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em]`} style={{ color: C.azul }}>
              {BIZ.rubro} · {BIZ.city}, {BIZ.region}
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className={`${display.className} text-[56px] md:text-[96px] font-extrabold uppercase leading-[0.95] tracking-tight mt-4`}>
              Corte de pelo,{' '}
              <span style={{ color: C.rojo }}>sin vueltas</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-[15px] leading-relaxed max-w-md" style={{ color: C.suave }}>
              Barbería para hombre en Luis Cruz Martínez, a pasos del centro de Molina.
              Llegas, te sientas, sales listo.
            </p>
          </Reveal>
          <Reveal delay={210}>
            <div className="mt-5 flex items-center gap-3">
              <Stars value={BIZ.rating} color={C.rojo} className="w-4 h-4" />
              <span className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.suave }}>
                {BIZ.ratingLabel} en Google
              </span>
            </div>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center justify-center h-[48px] px-7 text-[13px] font-medium uppercase tracking-[0.12em] rounded-full active:scale-95 transition-transform tap-44`}
                style={{ backgroundColor: C.rojo, color: C.papel }}
              >
                Agendar hora
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center justify-center h-[48px] px-6 text-[12.5px] font-medium uppercase tracking-[0.12em] rounded-full tap-44`}
                style={{ border: `1.5px solid ${C.azul}`, color: C.azul }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
        </div>
        <Baston reverse />
      </header>

      {/* Servicios: lo que hace una barbería */}
      <section id="servicios" className="py-12 md:py-16" style={{ backgroundColor: C.papel }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.azul }}>
              El oficio
            </p>
            <h2 className={`${display.className} text-4xl md:text-[56px] font-extrabold uppercase leading-[0.98] mb-10`}>
              Pelo y barba.<br />Nada más, nada menos.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                n: '01',
                t: 'Corte de pelo',
                d: 'Máquina, tijeras o mixto. Le dices cómo lo quieres y sale así.',
              },
              {
                n: '02',
                t: 'Barba y perfilado',
                d: 'Arreglo de barba, perfiles y los detalles que ordenan la cara.',
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div
                  className="rounded-md p-6 h-full"
                  style={{ backgroundColor: C.crema, border: `1px solid ${C.linea}` }}
                >
                  <p className={`${mono.className} text-[11px]`} style={{ color: C.rojo }}>{s.n}</p>
                  <h3 className={`${display.className} text-2xl font-extrabold uppercase mt-2`}>{s.t}</h3>
                  <p className="text-[13.5px] leading-relaxed mt-2" style={{ color: C.suave }}>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className={`${mono.className} mt-5 text-[10.5px] uppercase tracking-[0.16em]`} style={{ color: C.suave }}>
              Los precios y packs los confirma al agendar — este demo no inventa carta.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Ficha del local */}
      <section className="py-12 md:py-14" style={{ backgroundColor: C.azul, color: C.crema }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className={`${display.className} text-4xl font-extrabold`}>{BIZ.ratingLabel}</p>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-1.5`} style={{ color: 'rgba(243,237,226,0.7)' }}>
                  Nota en Google
                </p>
              </div>
              <div>
                <p className={`${display.className} text-4xl font-extrabold`}>1873</p>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-1.5`} style={{ color: 'rgba(243,237,226,0.7)' }}>
                  Luis Cruz Martínez
                </p>
              </div>
              <div>
                <p className={`${display.className} text-4xl font-extrabold`}>Molina</p>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-1.5`} style={{ color: 'rgba(243,237,226,0.7)' }}>
                  A pasos del centro
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Llegar */}
      <section id="llegar" className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.azul }}>
                Cómo llegar
              </p>
              <h2 className={`${display.className} text-4xl md:text-[50px] font-extrabold uppercase leading-[0.98]`}>
                Luis Cruz Martínez 1873
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.suave }}>
                En el centro de {BIZ.city}, sobre la calle principal que cruza el pueblo
                de norte a sur.
              </p>
              <div className={`${mono.className} mt-6 space-y-2.5 text-[12px] uppercase tracking-[0.14em]`} style={{ color: C.suave }}>
                <p><span style={{ color: C.rojo }}>DIR&nbsp;&nbsp;</span>{BIZ.address} · {BIZ.city}</p>
                <p>
                  <span style={{ color: C.rojo }}>TEL&nbsp;&nbsp;</span>
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-4 tap-44">{BIZ.phoneDisplay}</a>
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} inline-flex items-center justify-center h-[46px] px-6 text-[12.5px] font-medium uppercase tracking-[0.12em] rounded-full active:scale-95 transition-transform tap-44`}
                  style={{ backgroundColor: C.rojo, color: C.papel }}
                >
                  Agendar hora
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} inline-flex items-center justify-center h-[46px] px-6 text-[12.5px] font-medium uppercase tracking-[0.12em] rounded-full tap-44`}
                  style={{ border: `1.5px solid ${C.azul}`, color: C.azul }}
                >
                  Abrir en Maps
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-md overflow-hidden" style={{ border: `1px solid ${C.linea}` }}>
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

      <footer style={{ backgroundColor: '#141310', color: C.crema }}>
        <Baston className="opacity-60" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className={`${display.className} text-xl font-extrabold uppercase leading-tight`}>{BIZ.name}</p>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-0.5`} style={{ color: 'rgba(243,237,226,0.6)' }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
          </div>
          <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(243,237,226,0.62)' }}>
            {BIZ.address}, {BIZ.city}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            {' · '}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">WhatsApp</a>
          </address>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(243,237,226,0.55)' }}>
            {BIZ.ratingLabel} ★ en Google
          </p>
        </div>
        <SitiazoStrip />
      </footer>

      <WaFab href={WA_LINK} label="Agendar hora" />
    </div>
  )
}
