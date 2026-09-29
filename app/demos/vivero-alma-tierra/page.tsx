import type { Metadata } from 'next'
import Image from 'next/image'
import { demoMetadata } from '../meta'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import { Reveal, SiteNav, WhatsAppFab } from './chrome'
import { Etiqueta, BosquejoBadge, BosquejoGavillas, BosquejoMesa, BosquejoParcela } from './scenes'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  display: 'swap',
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  display: 'swap',
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
  display: 'swap',
})

/**
 * Dirección de arte: «las etiquetas clavadas». Un vivero se recorre
 * leyendo las tarjetas blancas clavadas en cada hilera — la página se
 * ordena igual: etiquetas sobre palito que rotulan cada sector, trazo
 * a línea para las escenas sin foto real y terracota de los maceteros
 * que se ven en la única foto de la ficha. Fraunces hace de rótulo de
 * entrada, Public Sans el cuerpo y Roboto Mono las etiquetas.
 */
const C = {
  papel: '#F6F1E3',
  crema: '#EDE5D2',
  verde: '#2F4A2E',
  verdeProfundo: '#1F351E',
  terracota: '#B4552E',
  tierra: '#4A3627',
  ink: '#2A251C',
  muted: '#6B6152',
  line: 'rgba(74,54,39,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'vivero-alma-tierra',
  title: 'Vivero Alma Tierra — Plantas en San Clemente',
  description:
    'Vivero Alma Tierra: plantas en Quebrada de Agua, Parcela 7, San Clemente. Consulta stock y ven a conocer el invernadero — WhatsApp.',
  image: `${IMG}/invernadero.webp`,
})

const HILERAS = [
  {
    etq: 'El invernadero',
    real: true,
    titulo: 'los maceteros de colores se ven desde el camino',
    texto:
      'La única foto de su ficha: el invernadero con sus mesas de madera y maceteros de colores cargados de flores. Así se ve la parcela cuando llegas.',
  },
  {
    etq: 'Temporada',
    titulo: 'la hilera que cambia con el año',
    texto:
      'Flores y plantines de temporada, rotulados a mano como en todo vivero. Qué hay hoy se confirma por WhatsApp — el stock cambia con la temporada.',
    scene: 'gavillas',
  },
  {
    etq: 'Trasplante',
    titulo: 'la mesa donde se arma cada planta',
    texto:
      'Maceteros, sustrato y plantines recién pasados a bolsa. Bosquejo mientras llegan las fotos reales del trabajo diario.',
    scene: 'mesa',
  },
  {
    etq: 'La parcela',
    titulo: 'Parcela 7, Quebrada de Agua',
    texto:
      'El vivero funciona en una parcela rural de San Clemente. Portón de campo, árboles y el invernadero al fondo — croquis a la espera de la foto real.',
    scene: 'parcela',
  },
] as const

export default function Page() {
  return (
    <div className={body.className} style={{ backgroundColor: C.papel, color: C.ink }}>
      <SiteNav name={BIZ.short} fontClass={display.className} />

      {/* ── Hero: el invernadero real ── */}
      <section id="inicio" className="relative pt-[110px] md:pt-[130px] pb-14 md:pb-20 px-5 md:px-8 overflow-hidden" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <Etiqueta tilt={-2}>Vivero · San Clemente</Etiqueta>
            <h1
              className={`${display.className} font-semibold text-[clamp(2.8rem,8vw,5.4rem)] leading-[1.0] mt-6 mb-5`}
              style={{ color: C.verdeProfundo }}
            >
              Alma Tierra,
              <br />
              <em className="font-light">el vivero de la parcela 7</em>
            </h1>
            <p className="text-base md:text-lg max-w-md mb-8 leading-relaxed" style={{ color: C.muted }}>
              Un vivero de Quebrada de Agua, en San Clemente: plantas de
              temporada, maceteros y el invernadero que se ve desde el
              camino. Se consulta por WhatsApp.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span
                className="inline-flex items-center gap-1.5 text-sm font-bold px-3 py-1.5"
                style={{ backgroundColor: C.verde, color: C.papel }}
              >
                <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                  <path d="M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z" />
                </svg>
                {BIZ.rating} en Google
              </span>
              <span className={`${mono.className} text-xs px-3 py-1.5 border`} style={{ borderColor: C.line, color: C.muted }}>
                {BIZ.address}
              </span>
            </div>
            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm px-7 py-3.5 transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.terracota, color: C.papel, maxHeight: '52px' }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm px-7 py-3.5 border-2 transition-colors tap-44"
                style={{ borderColor: C.verde, color: C.verde, maxHeight: '52px' }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <figure className="relative">
              <Image
                src={`${IMG}/invernadero.webp`}
                alt="El invernadero de Vivero Alma Tierra con mesas de madera y maceteros de colores cargados de flores"
                width={840}
                height={1120}
                priority
                className="w-full max-w-2xl mx-auto rounded-sm shadow-lg object-cover max-h-[560px]"
              />
              <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.18em] text-center mt-3`} style={{ color: C.muted }}>
                El invernadero — foto real de la ficha
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Las hileras: cada sector con su etiqueta ── */}
      <section id="hileras" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-tight mb-3`} style={{ color: C.verdeProfundo }}>
            Se recorre leyendo las etiquetas
          </h2>
          <p className="text-base md:text-lg max-w-xl mb-12" style={{ color: C.muted }}>
            Como en cualquier vivero: cada sector va marcado con su
            tarjeta clavada. Una foto real y tres croquis honestos — el
            resto se reemplaza con fotos de la dueña al activar.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-14">
          {HILERAS.map((h, i) => (
            <Reveal key={h.etq} delay={i * 80}>
              <article>
                <Etiqueta tilt={i % 2 === 0 ? -2 : 2}>{`H${i + 1} · ${h.etq}`}</Etiqueta>
                <div className="relative mt-3 overflow-hidden rounded-sm" style={{ boxShadow: '0 10px 26px rgba(42,37,28,0.14)' }}>
                  {h.real ? (
                    <Image
                      src={`${IMG}/invernadero.webp`}
                      alt="Detalle de los maceteros de colores con flores dentro del invernadero"
                      width={840}
                      height={1120}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  ) : (
                    <>
                      <BosquejoBadge />
                      {h.scene === 'gavillas' && <BosquejoGavillas className="w-full aspect-[4/3]" />}
                      {h.scene === 'mesa' && <BosquejoMesa className="w-full aspect-[4/3]" />}
                      {h.scene === 'parcela' && <BosquejoParcela className="w-full aspect-[4/3]" />}
                    </>
                  )}
                </div>
                <h3 className={`${display.className} font-medium text-2xl mt-5 mb-2`} style={{ color: C.verdeProfundo }}>
                  {h.titulo}
                </h3>
                <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                  {h.texto}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Horario: la tarjeta de la reja ── */}
      <section id="horario" className="scroll-mt-20 border-y" style={{ borderColor: C.line, backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-[1fr_1fr] gap-10 items-center">
          <Reveal>
            <Etiqueta tilt={-2}>Atención</Etiqueta>
            <h2 className={`${display.className} font-semibold text-3xl md:text-4xl leading-tight mt-5 mb-4`} style={{ color: C.verdeProfundo }}>
              Horario con pausa de almuerzo
            </h2>
            <p className="text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
              La ficha publica atención en dos bloques: mañana y tarde,
              con pausa al mediodía. Como el horario puede cambiar según
              la temporada, escribe por WhatsApp antes de ir.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="border-2 bg-white shadow-sm" style={{ borderColor: 'rgba(47,74,46,0.35)' }}>
              <p className={`${mono.className} px-5 py-3 text-[11px] uppercase tracking-[0.22em] border-b-2 border-dashed`} style={{ borderColor: C.line, color: C.muted }}>
                Horario publicado en Google
              </p>
              <ul className="px-5 py-2">
                <li className={`${mono.className} flex items-baseline justify-between py-3 border-b border-dashed text-sm`} style={{ borderColor: C.line }}>
                  <span className="font-bold">Mañana</span>
                  <span>9:30–13:30</span>
                </li>
                <li className={`${mono.className} flex items-baseline justify-between py-3 text-sm`}>
                  <span className="font-bold">Tarde</span>
                  <span>15:00–17:30</span>
                </li>
              </ul>
              <p className="px-5 pb-4 text-xs leading-relaxed" style={{ color: C.muted }}>
                Confirmado en la ficha el día de este mockup; los días
                exactos de atención se consultan por WhatsApp.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Etiqueta tilt={2}>Parcela 7</Etiqueta>
          <h2 className={`${display.className} font-semibold text-3xl md:text-4xl leading-tight mt-5 mb-3`} style={{ color: C.verdeProfundo }}>
            Quebrada de Agua, San Clemente
          </h2>
          <p className="text-base max-w-xl mb-8" style={{ color: C.muted }}>
            El vivero queda camino a Quebrada de Agua — zona rural al
            oriente de San Clemente. Con el mapa se llega sin problema;
            por WhatsApp te mandan la referencia exacta.
          </p>
        </Reveal>
        <Reveal>
          <div className="rounded-sm overflow-hidden border" style={{ borderColor: C.line }}>
            <LazyMap
              src={MAPS_EMBED}
              title="Mapa de Vivero Alma Tierra, Quebrada de Agua, San Clemente"
              className="w-full h-[320px] md:h-[400px]"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.verdeProfundo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-24">
          <Reveal>
            <span
              className="inline-block px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em]"
              style={{ backgroundColor: '#FFFFFF', color: C.verde }}
            >
              Consulta abierta
            </span>
            <h2
              className={`${display.className} font-semibold text-[clamp(2.2rem,7vw,4.4rem)] leading-[1.02] mt-6 mb-6 max-w-3xl`}
              style={{ color: C.papel }}
            >
              Pregunta qué hay en la hilera hoy
            </h2>
            <p className="text-base max-w-md mb-9" style={{ color: 'rgba(246,241,227,0.82)' }}>
              El stock cambia con la temporada: escríbenos por WhatsApp y
              te contamos qué plantas hay, a qué valor, y coordinamos tu
              visita a la parcela.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm px-8 py-3.5 transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.terracota, color: C.papel, maxHeight: '52px' }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="font-bold text-sm px-8 py-3.5 border transition-colors tap-44"
                style={{ borderColor: 'rgba(246,241,227,0.5)', color: C.papel, maxHeight: '52px' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.tierra, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className={`${display.className} font-semibold text-xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(246,241,227,0.65)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44" style={{ color: C.papel }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-xs" style={{ color: 'rgba(246,241,227,0.65)' }}>
              © {new Date().getFullYear()} {BIZ.name}
            </p>
            <WhatsAppFab />
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,241,227,0.14)' }}>
          <p
            className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed"
            style={{ color: 'rgba(246,241,227,0.75)' }}
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
