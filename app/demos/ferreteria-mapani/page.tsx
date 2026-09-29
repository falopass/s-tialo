import type { Metadata } from 'next'
import Image from 'next/image'
import { demoMetadata } from '../meta'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { BIZ, WA_LINK, WA_LINK_COTIZA, MAPS_URL, MAPS_EMBED, IMG, HORARIO } from './content'
import { Reveal, SiteNav, WhatsAppFab } from './chrome'
import { RotuloPasillo, BosquejoBadge, BosquejoPasillo, BosquejoMostrador, BosquejoMateriales } from './scenes'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' },
  ],
  display: 'swap',
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  display: 'swap',
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
})

/**
 * Dirección de arte: «la ferretería de barrio». La fachada real es roja
 * con letrero amarillo — esos dos colores mandan la página: Anton hace
 * de letrero pintado sobre el portón, los rótulos numerados cuelgan
 * como la señalética de los pasillos y Space Mono rotula el ticket de
 * cotización y los datos del local.
 */
const C = {
  papel: '#F7F1E4',
  papelSombra: '#EDE3CE',
  rojo: '#A81E1E',
  rojoOscuro: '#7A1414',
  carbon: '#1E1A16',
  amarillo: '#F2B90C',
  muted: '#5B5349',
  line: 'rgba(30,26,22,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'ferreteria-mapani',
  title: 'Ferretería Mapani — Herramientas en San Clemente',
  description:
    'Ferretería Mapani, tienda de herramientas en Alejandro Cruz 754, San Clemente. Consulta stock y cotiza por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const PASILLOS = [
  {
    n: 'PASILLO 01',
    label: 'Herramientas',
    titulo: 'el pasillo de las herramientas',
    texto:
      'De punta a punta del local: estanterías con herramientas manuales y de trabajo. Si buscas algo puntual, manda la foto por WhatsApp y te confirmamos stock.',
    scene: 'pasillo',
  },
  {
    n: 'PASILLO 02',
    label: 'El mostrador',
    titulo: 'el mostrador donde se cotiza',
    texto:
      'Aquí se pregunta, se compara y se cotiza. Trato directo con quienes atienden el local todos los días — sin menú en línea ni carrito, como siempre.',
    scene: 'mostrador',
  },
  {
    n: 'PASILLO 03',
    label: 'Materiales',
    titulo: 'materiales y despacho',
    texto:
      'Sacos, tambores y material a granel esperando retiro o reparto. Consulta disponibilidad y coordinamos cómo te queda más fácil llevarlo.',
    scene: 'materiales',
  },
] as const

const CONSULTAS = [
  'Herramientas manuales',
  'Herramientas para la construcción',
  'Ferretería y accesorios de obra',
  'Materiales y despacho',
] as const

export default function Page() {
  return (
    <div className={body.className} style={{ backgroundColor: C.papel, color: C.carbon }}>
      <SiteNav name={BIZ.short} fontClass={display.className} />

      {/* ── Hero: la fachada real ── */}
      <section id="inicio" className="relative min-h-[88svh] flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.carbon }}>
        <Image
          src={`${IMG}/fachada.webp`}
          alt="Fachada roja de Ferretería Mapani en Alejandro Cruz, San Clemente, con el letrero amarillo del nombre"
          width={1200}
          height={900}
          priority
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(30,26,22,0.34) 0%, rgba(30,26,22,0.06) 40%, rgba(30,26,22,0.9) 100%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pb-12 md:pb-16 pt-32">
          <Reveal>
            <RotuloPasillo n="LOCAL" label="Tienda de herramientas · San Clemente" />
            <h1
              className={`${display.className} uppercase leading-[0.92] text-[clamp(3rem,11vw,7.5rem)] mt-5 mb-4`}
              style={{ color: C.papel }}
            >
              Ferretería
              <br />
              <span style={{ color: C.amarillo }}>Mapani</span>
            </h1>
            <p className="text-base md:text-lg max-w-md mb-6" style={{ color: 'rgba(247,241,228,0.88)' }}>
              La ferretería de Alejandro Cruz, en pleno San Clemente.
              Herramientas, materiales y despacho — se pregunta, se cotiza
              y se retira en el local.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <span
                className="inline-flex items-center gap-1.5 text-sm font-bold px-3 py-1.5"
                style={{ backgroundColor: C.amarillo, color: C.carbon }}
              >
                <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                  <path d="M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z" />
                </svg>
                {BIZ.rating} en Google
              </span>
              <span
                className={`${mono.className} text-xs px-3 py-1.5 border`}
                style={{ borderColor: 'rgba(247,241,228,0.4)', color: 'rgba(247,241,228,0.85)' }}
              >
                {BIZ.address} · {BIZ.city}
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_COTIZA}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm px-7 py-3.5 transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.rojo, color: C.papel, maxHeight: '52px' }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm px-7 py-3.5 border transition-colors tap-44"
                style={{ borderColor: 'rgba(247,241,228,0.5)', color: C.papel, maxHeight: '52px' }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de datos ── */}
      <section className="border-b" style={{ borderColor: C.line, backgroundColor: C.rojo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-2 items-center justify-between">
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(247,241,228,0.85)' }}>
            {BIZ.address} — {BIZ.city}
          </p>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(247,241,228,0.85)' }}>
            Lu–Sa 8:30–13:30 · 14:30–19:00 — Do 9:30–14:00
          </p>
          <a
            href={`tel:${BIZ.phoneTel}`}
            className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.18em] underline underline-offset-4 tap-44`}
            style={{ color: '#FFD77A' }}
          >
            {BIZ.phoneDisplay}
          </a>
        </div>
      </section>

      {/* ── El local, pasillo a pasillo ── */}
      <section id="local" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <RotuloPasillo n="A" label="El local por dentro" />
          <h2
            className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.95] mt-6 mb-4 max-w-2xl`}
            style={{ color: C.carbon }}
          >
            Una ferretería se recorre por pasillos
          </h2>
          <p className="text-base md:text-lg max-w-xl mb-12" style={{ color: C.muted }}>
            La ficha pública solo tiene la foto de la fachada. El interior
            va dibujado como bosquejo — al activar el sitio se reemplaza
            por las fotos reales del local.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {PASILLOS.map((p, i) => (
            <Reveal key={p.n} delay={i * 90}>
              <article className="h-full flex flex-col border" style={{ borderColor: C.line, backgroundColor: '#FBF7EC' }}>
                <div className="px-4 pt-4">
                  <RotuloPasillo n={p.n.replace('PASILLO ', '0' + (i + 1))} label={p.label} />
                </div>
                <div className="relative mt-4">
                  <BosquejoBadge />
                  {p.scene === 'pasillo' && <BosquejoPasillo className="w-full aspect-[4/3]" />}
                  {p.scene === 'mostrador' && <BosquejoMostrador className="w-full aspect-[4/3]" />}
                  {p.scene === 'materiales' && <BosquejoMateriales className="w-full aspect-[4/3]" />}
                </div>
                <div className="p-5">
                  <h3 className={`${display.className} uppercase text-xl leading-tight mb-2`} style={{ color: C.rojoOscuro }}>
                    {p.titulo}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {p.texto}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Consultas: el ticket ── */}
      <section id="consultas" className="scroll-mt-20 border-y" style={{ borderColor: C.line, backgroundColor: C.papelSombra }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <RotuloPasillo n="B" label="Qué puedes consultar" />
            <h2
              className={`${display.className} uppercase text-4xl md:text-5xl leading-[0.95] mt-6 mb-5`}
              style={{ color: C.carbon }}
            >
              Antes de venir, manda la consulta
            </h2>
            <p className="text-base leading-relaxed max-w-md mb-7" style={{ color: C.muted }}>
              Escríbenos por WhatsApp con lo que necesitas — con foto o nombre
              del producto — y te confirmamos si hay stock y a qué valor.
              Así no haces el viaje en vano.
            </p>
            <a
              href={WA_LINK_COTIZA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-bold text-sm px-7 py-3.5 transition-transform active:scale-95 tap-44"
              style={{ backgroundColor: C.carbon, color: C.papel, maxHeight: '52px' }}
            >
              Mandar mi consulta
            </a>
          </Reveal>
          <Reveal delay={120}>
            {/* El ticket de cotización */}
            <div className="border shadow-md" style={{ borderColor: C.line, backgroundColor: '#FCFAF3' }}>
              <div
                className={`${mono.className} px-5 py-3 text-center text-[11px] uppercase tracking-[0.24em] border-b-2 border-dashed`}
                style={{ borderColor: C.line, color: C.muted }}
              >
                — Consulta típica de mostrador —
              </div>
              <ul>
                {CONSULTAS.map((c, i) => (
                  <li
                    key={c}
                    className={`${mono.className} flex items-baseline justify-between gap-4 px-5 py-4 text-sm border-b border-dashed`}
                    style={{ borderColor: C.line, color: C.carbon }}
                  >
                    <span className="flex items-baseline gap-3">
                      <span style={{ color: C.rojo }}>{String(i + 1).padStart(2, '0')}</span>
                      {c}
                    </span>
                    <span className="text-xs" style={{ color: C.muted }}>
                      consultar stock
                    </span>
                  </li>
                ))}
                <li className={`${mono.className} px-5 py-4 text-sm font-bold flex items-baseline justify-between`} style={{ color: C.carbon }}>
                  <span>Cotización por WhatsApp</span>
                  <span style={{ color: C.rojo }}>{BIZ.phoneDisplay}</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Horario: el letrero de la puerta ── */}
      <section id="horario" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-center">
          <Reveal>
            <RotuloPasillo n="C" label="Horario de atención" />
            <h2
              className={`${display.className} uppercase text-4xl md:text-5xl leading-[0.95] mt-6 mb-5`}
              style={{ color: C.carbon }}
            >
              El letrero de la puerta
            </h2>
            <p className="text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
              Almuerzo de por medio: la tienda cierra entre las 13:30 y las
              14:30. Los domingos solo en la mañana. Si te queda lejos,
              escribe antes y te esperamos con el pedido listo.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="border-4" style={{ borderColor: C.carbon, backgroundColor: C.amarillo }}>
              <p className={`${display.className} uppercase text-center text-2xl pt-6 pb-2`} style={{ color: C.carbon }}>
                Horario
              </p>
              <ul className="px-6 pb-6">
                {HORARIO.map((h) => (
                  <li
                    key={h.dias}
                    className={`${mono.className} flex flex-wrap items-baseline justify-between gap-2 py-3 border-b-2 border-dashed last:border-0 text-sm`}
                    style={{ borderColor: 'rgba(30,26,22,0.35)', color: C.carbon }}
                  >
                    <span className="font-bold uppercase tracking-wide">{h.dias}</span>
                    <span>
                      {h.manana}
                      {h.tarde ? ` · ${h.tarde}` : ''}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20 border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <RotuloPasillo n="D" label="Cómo llegar" />
            <h2
              className={`${display.className} uppercase text-4xl md:text-5xl leading-[0.95] mt-6 mb-8 max-w-2xl`}
              style={{ color: C.carbon }}
            >
              Alejandro Cruz 754, San Clemente
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 items-stretch">
            <Reveal>
              <div className="border overflow-hidden" style={{ borderColor: C.line }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title="Mapa de Ferretería Mapani, Alejandro Cruz 754, San Clemente"
                  className="w-full h-[320px] md:h-[380px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full flex flex-col justify-between gap-6 border p-6" style={{ borderColor: C.line, backgroundColor: '#FBF7EC' }}>
                <div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] mb-3`} style={{ color: C.rojo }}>
                    Dirección
                  </p>
                  <address className="not-italic text-lg font-semibold leading-snug mb-2">
                    {BIZ.address}
                    <br />
                    {BIZ.city}, {BIZ.region}
                  </address>
                  <p className="text-sm" style={{ color: C.muted }}>
                    La fachada roja con letrero amarillo — se reconoce al
                    pasar por Alejandro Cruz.
                  </p>
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center font-bold text-sm px-6 py-3 transition-transform active:scale-95 tap-44"
                  style={{ backgroundColor: C.rojo, color: C.papel, maxHeight: '52px' }}
                >
                  Abrir en Google Maps
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.rojoOscuro }}>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-24">
          <Reveal>
            <RotuloPasillo n="E" label="Directo al mostrador" />
            <h2
              className={`${display.className} uppercase text-[clamp(2.4rem,8vw,5rem)] leading-[0.92] mt-6 mb-6 max-w-3xl`}
              style={{ color: C.papel }}
            >
              Se pregunta, se cotiza, se retira
            </h2>
            <p className="text-base max-w-md mb-9" style={{ color: 'rgba(247,241,228,0.85)' }}>
              Escríbenos por WhatsApp con lo que andas buscando y te
              respondemos con stock y precio.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_COTIZA}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm px-8 py-3.5 transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.amarillo, color: C.carbon, maxHeight: '52px' }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="font-bold text-sm px-8 py-3.5 border transition-colors tap-44"
                style={{ borderColor: 'rgba(247,241,228,0.5)', color: C.papel, maxHeight: '52px' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.carbon, color: C.papel }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div>
            <p className={`${display.className} uppercase text-xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(247,241,228,0.65)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44" style={{ color: C.papel }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-xs" style={{ color: 'rgba(247,241,228,0.65)' }}>
              © {new Date().getFullYear()} {BIZ.name}
            </p>
            <WhatsAppFab />
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(247,241,228,0.14)' }}>
          <p
            className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed"
            style={{ color: 'rgba(247,241,228,0.75)' }}
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
