import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, SERVICIOS, TRABAJOS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

/**
 * Dirección de arte: «la cabina del piso trece». Su foto real muestra la
 * estación de manicura junto a un ventanal con vista a Talca — la página
 * se viste como ese espacio: marfil cálido, rosa viejo (de su logo y del
 * esmalte en las fotos), serif editorial Cormorant. Estructura: portada
 * con la cabina, ficha de servicios en dos columnas, trabajos reales en
 * mosaico y la academia.
 */
const C = {
  marfil: '#F7F1E9',
  papel: '#FDFBF7',
  tinta: '#2E2420',
  suave: '#6B5B52',
  rosa: '#B76E79',
  rosaFuerte: '#96525C',
  linea: '#E8DCD2',
  oscuro: '#241C19',
}

export const metadata: Metadata = demoMetadata({
  slug: 'andrea-beauty',
  title: `${BIZ.name} · Estética y academia en Talca`,
  description:
    'Manicure, lifting de pestañas, faciales y cursos de estética en Talca. 5,0 en Google. Agenda por WhatsApp.',
  image: `${IMG}/salon.webp`,
})

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: C.oscuro, color: '#F7F1E9' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: C.rosa }} aria-hidden="true" />
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

function Kicker({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] mb-4" style={{ color: light ? C.rosa : C.rosaFuerte }}>
      {children}
    </p>
  )
}

export default function AndreaBeautyPage() {
  return (
    <div className={body.className} style={{ backgroundColor: C.marfil, color: C.tinta }}>
      <BlitzNav
        name={<span className={`${display.className} text-xl tracking-wide`}>Andrea <em className="not-italic" style={{ color: C.rosaFuerte }}>Beauty</em></span>}
        links={[
          { label: 'Servicios', href: '#servicios' },
          { label: 'Trabajos', href: '#trabajos' },
          { label: 'Academia', href: '#academia' },
          { label: 'Llegar', href: '#llegar' },
        ]}
        waLink={WA_LINK}
        ctaLabel="Agendar"
        logoSrc={`${IMG}/logo.webp`}
        theme={{ over: 'light', bar: 'rgba(253,251,247,0.95)', ink: C.tinta, line: C.linea, btnBg: C.rosaFuerte, btnInk: '#FDFBF7' }}
      />

      {/* Portada: la cabina con vista */}
      <header id="inicio" className="relative pt-28 pb-10 md:pt-32 md:pb-14">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-end">
            <div>
              <Reveal>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.rosaFuerte }}>
                  {BIZ.rubro} · {BIZ.city}
                </p>
              </Reveal>
              <Reveal delay={90}>
                <h1 className={`${display.className} text-[44px] md:text-[64px] leading-[1.02] font-light mt-4`}>
                  Tu hora de belleza,{' '}
                  <em style={{ color: C.rosaFuerte }}>a 13 pisos de altura</em>
                </h1>
              </Reveal>
              <Reveal delay={170}>
                <p className="mt-5 text-[15px] leading-relaxed max-w-md" style={{ color: C.suave }}>
                  {BIZ.slogan}: manicure, pestañas, faciales y tratamientos
                  corporales en una cabina con vista a todo {BIZ.city}.
                </p>
              </Reveal>
              <Reveal delay={230}>
                <div className="mt-5 flex items-center gap-3">
                  <Stars value={BIZ.rating} color={C.rosaFuerte} className="w-4 h-4" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em]" style={{ color: C.suave }}>
                    {BIZ.ratingLabel} en Google · {BIZ.seguidores} seguidoras en Instagram
                  </span>
                </div>
              </Reveal>
              <Reveal delay={280}>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-[48px] px-7 text-[13.5px] font-semibold rounded-full active:scale-95 transition-transform tap-44"
                    style={{ backgroundColor: C.rosaFuerte, color: C.papel }}
                  >
                    Agendar hora
                  </a>
                  <a
                    href="#trabajos"
                    className="inline-flex items-center justify-center h-[48px] px-6 text-[13.5px] font-medium rounded-full tap-44"
                    style={{ border: `1.5px solid ${C.rosaFuerte}`, color: C.rosaFuerte }}
                  >
                    Ver trabajos
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={150}>
              <figure className="relative">
                <div className="relative aspect-[4/5] max-w-[400px] mx-auto overflow-hidden rounded-[26px]" style={{ border: `1px solid ${C.linea}` }}>
                  <Image
                    src={`${IMG}/salon.webp`}
                    alt="Estación de manicura de Andrea Beauty junto al ventanal, con vista a Talca"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <figcaption className="mt-2.5 text-[11px] text-center" style={{ color: C.suave }}>
                  La cabina real, piso 13 con vista a la ciudad
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </header>

      {/* Ficha de servicios */}
      <section id="servicios" className="py-12 md:py-16" style={{ backgroundColor: C.papel }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <Reveal>
            <Kicker>Lo que atienden</Kicker>
            <h2 className={`${display.className} text-3xl md:text-[44px] leading-[1.05] font-light mb-10`}>
              De las uñas a la mirada, <em style={{ color: C.rosaFuerte }}>y la piel al final</em>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ backgroundColor: C.linea, border: `1px solid ${C.linea}` }}>
            {SERVICIOS.map((s, i) => (
              <div key={s.nombre} className="p-6" style={{ backgroundColor: C.papel }}>
                <Reveal delay={i * 40}>
                  <h3 className={`${display.className} text-xl`}>{s.nombre}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: C.suave }}>
                    {s.detalle}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trabajos reales en mosaico */}
      <section id="trabajos" className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Kicker>Instagram @andreabeauty.cl</Kicker>
            <h2 className={`${display.className} text-3xl md:text-[44px] leading-[1.05] font-light mb-9`}>
              Trabajos reales, <em style={{ color: C.rosaFuerte }}>de sus propias fotos</em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {TRABAJOS.map((t, i) => (
              <Reveal key={t.nombre} delay={i * 60}>
                <figure className="group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl" style={{ border: `1px solid ${C.linea}` }}>
                    <Image
                      src={t.src}
                      alt={t.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <figcaption className="mt-2.5">
                    <p className={`${display.className} text-[17px] leading-tight`}>{t.nombre}</p>
                    <p className="text-[12px] mt-1 leading-snug" style={{ color: C.suave }}>{t.detalle}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Academia */}
      <section id="academia" className="py-12 md:py-16" style={{ backgroundColor: C.oscuro, color: '#F7F1E9' }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <Reveal>
            <div>
              <Kicker light>Andrea Beauty Academy</Kicker>
              <h2 className={`${display.className} text-3xl md:text-[42px] leading-[1.05] font-light`}>
                También forma: <em style={{ color: C.rosa }}>cursos de pestañas y más</em>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed max-w-lg" style={{ color: 'rgba(247,241,233,0.72)' }}>
                La misma cabina funciona como academia: cursos de lifting de pestañas
                y técnicas de estética para quienes quieren aprender el oficio con
                protocolos reales.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-col gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[46px] px-7 text-[13.5px] font-semibold rounded-full whitespace-nowrap active:scale-95 transition-transform tap-44"
                style={{ backgroundColor: C.rosa, color: '#241C19' }}
              >
                Preguntar por cursos
              </a>
              <a
                href={BIZ.agenda}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[46px] px-6 text-[13.5px] font-medium rounded-full whitespace-nowrap tap-44"
                style={{ border: `1.5px solid ${C.rosa}`, color: '#F7F1E9' }}
              >
                Agenda online
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Llegar */}
      <section id="llegar" className="py-12 md:py-16" style={{ backgroundColor: C.papel }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <div>
              <Kicker>Cómo llegar</Kicker>
              <h2 className={`${display.className} text-3xl md:text-[42px] leading-[1.05] font-light`}>
                Oficina 1319, en pleno {BIZ.city}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.suave }}>
                La cabina está en la oficina 1319, en el centro de {BIZ.city}.
                Agenda con anticipación: la agenda se llena por la vista — y por el trabajo.
              </p>
              <div className="mt-6 space-y-2 text-[14px]" style={{ color: C.suave }}>
                <p><strong style={{ color: C.tinta }}>Ubicación</strong> — {BIZ.address}, {BIZ.city}</p>
                <p>
                  <strong style={{ color: C.tinta }}>WhatsApp</strong> —{' '}
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 tap-44" style={{ color: C.rosaFuerte }}>
                    {BIZ.phoneDisplay}
                  </a>
                </p>
                <p>
                  <strong style={{ color: C.tinta }}>Instagram</strong> —{' '}
                  <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 tap-44" style={{ color: C.rosaFuerte }}>
                    @andreabeauty.cl
                  </a>
                </p>
              </div>
              <div className="mt-7">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[46px] px-6 text-[13.5px] font-medium rounded-full tap-44"
                  style={{ border: `1.5px solid ${C.rosaFuerte}`, color: C.rosaFuerte }}
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.linea}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                className="w-full min-h-[320px] h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <footer style={{ backgroundColor: C.oscuro, color: '#F7F1E9' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado */}
            <img src={`${IMG}/logo.webp`} alt="Logo de Andrea Beauty" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <p className={`${display.className} text-lg leading-tight`}>{BIZ.name}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] mt-0.5" style={{ color: C.rosa }}>
                {BIZ.city} · {BIZ.seguidores} en Instagram
              </p>
            </div>
          </div>
          <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(247,241,233,0.6)' }}>
            {BIZ.address}, {BIZ.city}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            {' · '}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">WhatsApp</a>
          </address>
          <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: 'rgba(247,241,233,0.6)' }}>
            {BIZ.ratingLabel} ★ en Google
          </p>
        </div>
        <SitiazoStrip />
      </footer>

      <WaFab href={WA_LINK} label="Agendar hora" />
    </div>
  )
}
