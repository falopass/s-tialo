import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { SITE, whatsappLink } from '@/lib/config'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, HORARIO } from './content'

const display = localFont({
  src: [{ path: '../../fonts/sora/normal-100-800.woff2', weight: '100 800' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400' }],
})

const C = {
  bg: '#141517',
  panel: '#1C1E22',
  ink: '#EDEAE3',
  muted: '#A39E94',
  copper: '#DB8A45',
  line: 'rgba(237,234,227,0.14)',
}

const REGISTRO = [
  {
    img: `${IMG}/calefon-detalle.webp`,
    alt: 'Detalle de conexiones de un calefón instalado por Gasfiter Sec',
    t: '01 · Conexión certificada de calefón',
    w: 1200,
    h: 936,
  },
  {
    img: `${IMG}/montaje.webp`,
    alt: 'Montaje de equipo de gas en terreno',
    t: '02 · Montaje en terreno',
    w: 720,
    h: 481,
  },
  {
    img: `${IMG}/cilindros.webp`,
    alt: 'Cilindros de gas preparados para instalación',
    t: '03 · Red de cilindros de gas',
    w: 712,
    h: 544,
  },
  {
    img: `${IMG}/calefon.webp`,
    alt: 'Calefón instalado y funcionando en una casa de Talca',
    t: '04 · Calefón en servicio',
    w: 904,
    h: 1200,
  },
]

const SERVICIOS = [
  'Gasfitería general y reparaciones',
  'Instalación de calefón',
  'Trabajos de gas con certificación SEC',
  'Pruebas y detección de problemas',
  'Urgencias y visitas a domicilio',
]

const RESENAS = [
  {
    q: 'Excelente profesional, certificado y con muy buena disposición. Solución rápida y certera, realiza todas las pruebas necesarias para entregar respuesta a los problemas. Gasfiter 100% recomendable.',
    n: 'Claudio Alarcon',
    s: 5,
  },
  {
    q: 'Excelente trabajo, gasfiter certificado 100% recomendable.',
    n: 'Benjamín Orellana',
    s: 5,
  },
]

export const metadata = demoMetadata({
  slug: 'gasfiteria-sec-soluciones',
  title: 'Gasfiter Sec · gasfitería certificada SEC 24 hrs en Talca',
  description:
    'Gasfitería y soluciones F.C en Talca: gasfiter certificado SEC, instalación de calefón, urgencias 24 horas a domicilio. WhatsApp +56 9 6570 9371.',
  image: `${IMG}/calefon.webp`,
})

function Ficha({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 py-3.5 border-b" style={{ borderColor: C.line }}>
      <dt className={`${mono.className} text-[11px] uppercase tracking-[0.18em] pt-0.5`} style={{ color: C.muted }}>
        {label}
      </dt>
      <dd className="text-sm md:text-[15px] text-right font-medium">{value}</dd>
    </div>
  )
}

export default function SecDemo() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.bg, color: C.ink }}>
      <BlitzNav
        name={
          <span className={`${display.className} font-bold tracking-tight`}>
            Gasfiter<span style={{ color: C.copper }}>_</span>Sec
          </span>
        }
        links={[
          { label: 'Ficha', href: '#ficha' },
          { label: 'Registro', href: '#registro' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={WA_LINK}
        theme={{ over: 'dark', bar: C.bg, ink: C.ink, line: C.line, btnBg: C.copper, btnInk: C.bg }}
        fontClass={display.className}
      />

      {/* ── Hero: ficha técnica ── */}
      <section id="inicio" className="pt-[76px] md:pt-[96px]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 md:pt-12 pb-12 md:pb-16 grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-14 items-start">
          <div>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em]`} style={{ color: C.copper }}>
              Ficha técnica · Talca, Maule
            </p>
            <h1 className={`${display.className} text-[34px] md:text-[60px] font-bold leading-[1.04] mt-4 tracking-tight`}>
              Gasfiter autorizado SEC, 24 horas en Talca.
            </h1>
            <p className="mt-5 text-base md:text-lg max-w-lg leading-relaxed" style={{ color: C.muted }}>
              {BIZ.legal} atiende urgencias e instalaciones a domicilio,
              todos los días, toda la noche.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-6 rounded-full transition-transform active:scale-95"
                style={{ backgroundColor: C.copper, color: C.bg, height: 48 }}
              >
                Llamar a la urgencia
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${mono.className} inline-flex items-center justify-center text-sm px-5 rounded-full border transition-colors active:scale-95`}
                style={{ borderColor: C.line, color: C.ink, height: 48 }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </div>
          <Reveal delay={80}>
            <figure
              className="relative rounded-lg p-3 md:p-4"
              style={{ backgroundColor: C.panel, border: `1px solid ${C.line}` }}
            >
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 pt-2.5 md:px-4">
                <span className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                  Reg_001 / terreno
                </span>
                <span className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.copper }}>
                  SEC
                </span>
              </div>
              <Image
                src={`${IMG}/calefon.webp`}
                alt="Calefón instalado por Gasfiter Sec en una vivienda de Talca"
                width={904}
                height={1200}
                sizes="(max-width: 768px) 100vw, 40vw"
                className="w-full h-auto rounded-md object-cover mt-6"
                priority
              />
              <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                Instalación de calefón · Talca
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Franja de estado ── */}
      <div style={{ backgroundColor: C.copper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-3 overflow-hidden">
          <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.2em] whitespace-nowrap`} style={{ color: C.bg }}>
            Abierto 24 hrs · certificado SEC · urgencias a domicilio · Talca · abierto 24 hrs · certificado SEC · urgencias a domicilio
          </p>
        </div>
      </div>

      {/* ── Ficha del servicio ── */}
      <section id="ficha" style={{ backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <h2 className={`${display.className} text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight`}>
              La ficha del servicio
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
              Datos reales de la empresa, tal como figuran en su ficha de Google Maps y
              lo que confirman sus clientes en las reseñas.
            </p>
            <div
              className="mt-8 inline-flex items-center gap-3 px-4 py-3 rounded-lg"
              style={{ backgroundColor: C.panel, border: `1px solid ${C.line}` }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#7ED957' }} aria-hidden="true" />
              <span className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.ink }}>
                Atendiendo ahora · 24 horas
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <dl>
              <Ficha label="Razón social" value={BIZ.legal} />
              <Ficha label="Atiende" value={BIZ.atiende} />
              <Ficha label="Certificación" value="SEC (según reseñas)" />
              <Ficha label="Horario" value={HORARIO[0].h} />
              <Ficha label="Sector" value={`${BIZ.address}, ${BIZ.city}`} />
              <Ficha label="Contacto" value={BIZ.phoneDisplay} />
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── Servicios numerados ── */}
      <section style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em]`} style={{ color: C.copper }}>
              Alcance del trabajo
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl font-bold leading-[1.05] mt-3 tracking-tight max-w-2xl`}>
              Lo que hace cuando llega a tu casa
            </h2>
          </Reveal>
          <div className="mt-10">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s} delay={i * 50}>
                <div
                  className="flex items-baseline gap-4 md:gap-6 py-4 md:py-5 border-b last:border-b-0"
                  style={{ borderColor: C.line }}
                >
                  <span className={`${mono.className} text-sm md:text-base shrink-0`} style={{ color: C.copper }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className={`${display.className} text-lg md:text-2xl font-semibold leading-snug`}>{s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registro fotográfico ── */}
      <section id="registro" style={{ backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em]`} style={{ color: C.copper }}>
                Registro fotográfico
              </p>
              <h2 className={`${display.className} text-3xl md:text-5xl font-bold leading-[1.05] mt-3 tracking-tight`}>
                Trabajo real, foto real
              </h2>
            </Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] max-w-[220px] text-right`} style={{ color: C.muted }}>
              Fotos publicadas por el negocio en Google Maps
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            <Reveal className="md:col-span-7">
              <figure style={{ border: `1px solid ${C.line}` }} className="rounded-lg p-3" >
                <Image
                  src={REGISTRO[0].img}
                  alt={REGISTRO[0].alt}
                  width={REGISTRO[0].w}
                  height={REGISTRO[0].h}
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="w-full h-auto rounded-md object-cover"
                />
                <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.copper }}>
                  {REGISTRO[0].t}
                </figcaption>
              </figure>
            </Reveal>
            <div className="md:col-span-5 grid gap-4 md:gap-5 content-start">
              {REGISTRO.slice(1, 3).map((r, i) => (
                <Reveal key={r.t} delay={80 + i * 70}>
                  <figure style={{ border: `1px solid ${C.line}` }} className="rounded-lg p-3">
                    <Image
                      src={r.img}
                      alt={r.alt}
                      width={r.w}
                      height={r.h}
                      sizes="(max-width: 768px) 100vw, 42vw"
                      className="w-full h-auto rounded-md object-cover"
                    />
                    <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.copper }}>
                      {r.t}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
            <Reveal className="md:col-span-5 md:col-start-8" delay={120}>
              <figure style={{ border: `1px solid ${C.line}` }} className="rounded-lg p-3">
                <Image
                  src={REGISTRO[3].img}
                  alt={REGISTRO[3].alt}
                  width={REGISTRO[3].w}
                  height={REGISTRO[3].h}
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="w-full h-auto max-h-[420px] rounded-md object-cover"
                />
                <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.copper }}>
                  {REGISTRO[3].t}
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="md:col-span-7 flex items-end" delay={160}>
              <blockquote
                className="w-full rounded-lg p-5 md:p-6"
                style={{ backgroundColor: C.panel, border: `1px solid ${C.line}` }}
              >
                <Stars value={RESENAS[0].s} color={C.copper} />
                <p className="mt-3 text-[15px] md:text-base leading-relaxed" style={{ color: C.ink }}>
                  &ldquo;{RESENAS[0].q}&rdquo;
                </p>
                <footer className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                  {RESENAS[0].n} · reseña en Google
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Segunda reseña + link ── */}
      <section style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 grid gap-6 md:grid-cols-[1.6fr_1fr] md:gap-12 items-center">
          <Reveal>
            <blockquote>
              <Stars value={RESENAS[1].s} color={C.copper} />
              <p className={`${display.className} mt-3 text-xl md:text-3xl font-semibold leading-snug`}>
                &ldquo;{RESENAS[1].q}&rdquo;
              </p>
              <footer className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                {RESENAS[1].n} · reseña en Google
              </footer>
            </blockquote>
          </Reveal>
          <Reveal delay={80}>
            <a
              href={BIZ.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-flex items-center justify-center text-xs uppercase tracking-[0.16em] px-6 rounded-full border transition-colors active:scale-95 w-full md:w-auto`}
              style={{ borderColor: C.copper, color: C.copper, height: 48 }}
            >
              Leer todas las reseñas
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" style={{ backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em]`} style={{ color: C.copper }}>
              Punto de salida
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl font-bold leading-[1.05] mt-3 tracking-tight`}>
              Sur de Talca, a domicilio en toda la comuna
            </h2>
            <dl className="mt-8">
              <Ficha label="Dirección" value={`${BIZ.address}, ${BIZ.city}`} />
              <Ficha label="Horario" value={HORARIO[0].h} />
              <Ficha label="WhatsApp" value={BIZ.phoneDisplay} />
            </dl>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full min-h-[300px] rounded-lg overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}`}
                className="w-full h-full min-h-[300px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section style={{ backgroundColor: C.copper, color: C.bg }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col md:flex-row md:items-end gap-6 md:gap-10">
          <div className="flex-1">
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em]`} style={{ color: 'rgba(20,21,23,0.65)' }}>
              A cualquier hora
            </p>
            <h2 className={`${display.className} text-3xl md:text-6xl font-bold leading-[0.98] mt-3 tracking-tight`}>
              Son las 3 de la mañana y el calefón gotea
            </h2>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-semibold text-base px-8 rounded-full transition-transform active:scale-95 shrink-0"
            style={{ backgroundColor: C.bg, color: C.ink, height: 48 }}
          >
            WhatsApp {BIZ.phoneDisplay}
          </a>
        </div>
      </section>

      <footer style={{ backgroundColor: '#0E0F11' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col gap-2">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className={`${display.className} text-lg font-bold`} style={{ color: C.ink }}>
              {BIZ.name}
            </p>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
              {BIZ.phoneDisplay} · 24 hrs
            </p>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className="text-xs" style={{ color: C.muted }}>
              {BIZ.legal} · {BIZ.address}, {BIZ.city}
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs underline underline-offset-4"
              style={{ color: C.muted }}
            >
              Google Maps
            </a>
          </div>
          <p className="text-[11px] leading-relaxed pt-2 border-t mt-2" style={{ color: 'rgba(237,234,227,0.5)', borderColor: C.line }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">
              Sitiazo
            </a>{' '}
            para {BIZ.legal} · así se vería tu sitio. Fotos reales publicadas en Google Maps;
            textos y reseñas de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
