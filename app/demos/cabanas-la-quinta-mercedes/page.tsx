import type { Metadata } from 'next'
import Image from 'next/image'
import { demoMetadata } from '../meta'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, INCLUYE } from './content'
import { Reveal, SiteNav, WhatsAppFab } from './chrome'
import { Llavero, Sello, BosquejoBadge, BosquejoDormitorio, BosquejoCocina, BosquejoPiscina } from './scenes'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/lora/normal-400-700.woff2', weight: '400 700', style: 'normal' }],
  display: 'swap',
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
  display: 'swap',
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  display: 'swap',
})

/**
 * Dirección de arte: «los llaveros de la quinta». La quinta es una casa
 * blanca en medio de una pradera con sauces — la página se recorre como
 * el manojo de llaves del hospedaje: cada espacio cuelga de su etiqueta
 * numerada. Lora marca el tono de campo tranquilo, Karla lleva el cuerpo
 * y Geist Mono rotula las etiquetas y los datos, como el cartón del
 * llavero escrito a mano.
 */
const C = {
  papel: '#FAF7EE',
  crema: '#F0EADC',
  verde: '#3D5A35',
  verdeProfundo: '#2A4023',
  verdeClaro: '#6B8C5E',
  cielo: '#DCE9E0',
  ink: '#26301F',
  muted: '#5E6B54',
  line: 'rgba(61,90,53,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-la-quinta-mercedes',
  title: 'Cabañas La Quinta Mercedes — Casa rural en Talca',
  description:
    'Cabañas La Quinta Mercedes: casa rural en Av. Mercedes 1141, sector rural de Talca, con piscina y jardín. Reserva por WhatsApp.',
  image: `${IMG}/cabana.webp`,
})

const LLAVEROS = [
  {
    n: '01',
    label: 'La cabaña',
    titulo: 'la casa blanca entre los sauces',
    texto:
      'La cabaña se levanta sola en medio de la pradera, entre sauces y pasto. Desde adentro, la ciudad no se escucha: solo el viento en las ramas.',
    scene: null,
  },
  {
    n: '02',
    label: 'Dormitorio',
    titulo: 'dormir con ventana al campo',
    texto:
      'El dormitorio mira a la pradera: te despiertas con la luz entrando por el ventanal. Esta vista se reemplaza por la foto real al activar el sitio.',
    scene: 'dormitorio',
  },
  {
    n: '03',
    label: 'Cocina y estar',
    titulo: 'cocinar y conversar en la misma mesa',
    texto:
      'El estar comparte espacio con la cocina y la mesa — el formato de casa de campo donde todo pasa en el mismo lugar. Bosquejo a la espera de la foto real.',
    scene: 'cocina',
  },
  {
    n: '04',
    label: 'Piscina y pradera',
    titulo: 'la piscina a la sombra de los sauces',
    texto:
      'La quinta publica piscina y jardín en su ficha de alojamiento. En verano el panorama es este: agua, pasto y la sombra larga de los árboles.',
    scene: 'piscina',
  },
] as const

const PASOS = [
  { n: '1', t: 'Escríbenos por WhatsApp', d: 'Cuéntanos las fechas y cuántas personas vienen.' },
  { n: '2', t: 'Te confirmamos disponibilidad', d: 'Respondemos con cupo y valor para tus fechas.' },
  { n: '3', t: 'Retiras la llave y listo', d: 'Coordinamos la entrega directo con los dueños.' },
] as const

export default function Page() {
  return (
    <div className={body.className} style={{ backgroundColor: C.papel, color: C.ink }}>
      <SiteNav name={BIZ.short} fontClass={display.className} />

      {/* ── Hero: la postal de la quinta ── */}
      <section id="inicio" className="relative pt-[110px] md:pt-[130px] pb-14 md:pb-20 px-5 md:px-8" style={{ backgroundColor: C.cielo }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <Llavero n="Q-01" label="Casa rural · Talca" />
            <h1
              className={`${display.className} text-[clamp(2.6rem,7.5vw,4.8rem)] leading-[1.02] mt-6 mb-5`}
              style={{ color: C.verdeProfundo }}
            >
              Una casa blanca
              <br />
              <em>en medio de la pradera</em>
            </h1>
            <p className="text-base md:text-lg max-w-md mb-6 leading-relaxed" style={{ color: C.muted }}>
              {BIZ.name} está en el sector rural de la Av. Mercedes, a las
              afueras de Talca: pasto, sauces, piscina y silencio. Se
              arrienda directo con los dueños.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Sello texto={`★ ${BIZ.rating} en Google`} />
              <span className={`${mono.className} text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                {BIZ.address} · sector rural
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm px-7 py-3.5 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.verde, color: C.papel, maxHeight: '52px' }}
              >
                Consultar disponibilidad
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm px-7 py-3.5 rounded-full border-2 transition-colors tap-44"
                style={{ borderColor: C.verde, color: C.verde, maxHeight: '52px' }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            {/* La postal: la única foto real de la ficha */}
            <figure
              className="relative rotate-[1.5deg] border-[10px] shadow-xl"
              style={{ borderColor: '#FFFFFF', backgroundColor: '#FFFFFF' }}
            >
              <Image
                src={`${IMG}/cabana.webp`}
                alt="Cabaña blanca de La Quinta Mercedes sola en la pradera, entre sauces y pasto verde"
                width={1000}
                height={1333}
                priority
                className="w-full h-auto"
              />
              <figcaption
                className={`${mono.className} text-[11px] uppercase tracking-[0.18em] pt-3 pb-1 flex items-center justify-between`}
                style={{ color: C.muted }}
              >
                <span>La quinta, desde el camino</span>
                <span aria-hidden="true">~//~</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Los llaveros: cada espacio con su etiqueta ── */}
      <section id="llaveros" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <h2 className={`${display.className} text-4xl md:text-5xl leading-tight mb-3`} style={{ color: C.verdeProfundo }}>
            El manojo de llaves de la quinta
          </h2>
          <p className="text-base md:text-lg max-w-xl mb-12" style={{ color: C.muted }}>
            Cada espacio cuelga de su propia etiqueta. La cabaña ya tiene
            foto real; el resto va en croquis mientras esperan las fotos
            de la dueña.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {LLAVEROS.map((l, i) => (
            <Reveal key={l.n} delay={i * 80}>
              <article>
                <Llavero n={l.n} label={l.label} />
                <div className="relative mt-4 rounded-lg overflow-hidden" style={{ boxShadow: '0 10px 30px rgba(42,64,35,0.14)' }}>
                  {l.scene === null ? (
                    <Image
                      src={`${IMG}/cabana.webp`}
                      alt="Vista lateral de la cabaña blanca con su pradera y sauces"
                      width={1000}
                      height={1333}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  ) : (
                    <>
                      <BosquejoBadge />
                      {l.scene === 'dormitorio' && <BosquejoDormitorio className="w-full aspect-[4/3]" />}
                      {l.scene === 'cocina' && <BosquejoCocina className="w-full aspect-[4/3]" />}
                      {l.scene === 'piscina' && <BosquejoPiscina className="w-full aspect-[4/3]" />}
                    </>
                  )}
                </div>
                <h3 className={`${display.className} text-2xl mt-5 mb-2`} style={{ color: C.verdeProfundo }}>
                  {l.titulo}
                </h3>
                <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                  {l.texto}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Qué trae la quinta ── */}
      <section id="incluye" className="scroll-mt-20 border-y" style={{ borderColor: C.line, backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <Reveal>
            <h2 className={`${display.className} text-3xl md:text-4xl mb-8`} style={{ color: C.verdeProfundo }}>
              Lo que publica su ficha de alojamiento
            </h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {INCLUYE.map((item, i) => (
              <Reveal key={item} delay={i * 50}>
                <span
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-semibold"
                  style={{ borderColor: C.line, backgroundColor: C.papel, color: C.verde }}
                >
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2.5 8.5 l3.5 3.5 l7.5 -8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="text-sm mt-6 max-w-lg" style={{ color: C.muted }}>
              Detalles finos — número de camas, capacidad exacta y valores —
              se confirman directo por WhatsApp con los dueños.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo se reserva ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <h2 className={`${display.className} text-3xl md:text-4xl mb-10`} style={{ color: C.verdeProfundo }}>
            Reservar es conversar
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {PASOS.map((p, i) => (
            <Reveal key={p.n} delay={i * 90}>
              <div className="border-t-2 pt-5" style={{ borderColor: C.verde }}>
                <span className={`${mono.className} text-3xl font-bold`} style={{ color: C.verdeClaro }}>
                  {p.n}
                </span>
                <h3 className="font-bold text-lg mt-2 mb-1.5" style={{ color: C.ink }}>
                  {p.t}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                  {p.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20 border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} text-3xl md:text-4xl mb-3`} style={{ color: C.verdeProfundo }}>
              Av. Mercedes 1141, saliendo de Talca
            </h2>
            <p className="text-base max-w-xl mb-8" style={{ color: C.muted }}>
              La quinta queda en el sector rural de la Avenida Mercedes, a
              unos 11 kilómetros del centro de Talca — cerca de la ciudad,
              lejos del ruido.
            </p>
          </Reveal>
          <Reveal>
            <div className="rounded-lg overflow-hidden border" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa de Cabañas La Quinta Mercedes, Av. Mercedes 1141, Talca"
                className="w-full h-[320px] md:h-[400px]"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.verdeProfundo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-24">
          <Reveal>
            <Llavero n="Q-02" label="Reserva directa" />
            <h2
              className={`${display.className} text-[clamp(2.2rem,7vw,4.4rem)] leading-[1.05] mt-6 mb-6 max-w-3xl`}
              style={{ color: C.papel }}
            >
              El campo queda a once kilómetros
            </h2>
            <p className="text-base max-w-md mb-9" style={{ color: 'rgba(250,247,238,0.82)' }}>
              Escríbenos por WhatsApp con tus fechas y te confirmamos
              disponibilidad y valor el mismo día.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm px-8 py-3.5 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.papel, color: C.verdeProfundo, maxHeight: '52px' }}
              >
                Consultar disponibilidad
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="font-bold text-sm px-8 py-3.5 rounded-full border transition-colors tap-44"
                style={{ borderColor: 'rgba(250,247,238,0.5)', color: C.papel, maxHeight: '52px' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-6 pb-4 md:pt-8 md:pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
          <div>
            <p className={`${display.className} text-xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(250,247,238,0.65)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44" style={{ color: C.papel }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-xs" style={{ color: 'rgba(250,247,238,0.65)' }}>
              © {new Date().getFullYear()} {BIZ.name}
            </p>
            <WhatsAppFab />
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(250,247,238,0.14)' }}>
          <p
            className="max-w-6xl mx-auto px-5 md:px-8 py-3 text-xs leading-snug"
            style={{ color: 'rgba(250,247,238,0.75)' }}
          >
            Mockup preparado por{' '}
            <a
              href={SITE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2 tap-44"
              style={{ color: C.papel }}
            >
              Sitiazo
            </a>{' '}
            para {BIZ.name} — así se vería tu sitio.{' '}
            <a
              href={whatsappLink('contacto')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2 tap-44"
              style={{ color: C.papel }}
            >
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
