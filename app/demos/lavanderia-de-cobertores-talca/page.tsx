import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ, WA_LINK, WA_LINK_DELIVERY, MAPS_URL, MAPS_EMBED,
  IMG, HORARIO, CARGAS, TRAMITE, RESENAS,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «ticket de retiro» — la boleta de papel que te
 * pasan cuando dejas la ropa. Base papel crema, tinta azul noche y un
 * solo acento azul lavandería: cada sección se corta con línea
 * punteada y muescas, los sellos mono marcan número de ticket, y las
 * fotos van "adjuntas" con leve rotación como prendas pinzadas.
 */
const C = {
  papel: '#FAF4E7',
  papel2: '#F0E7D3',
  superficie: '#FFFDF7',
  tinta: '#17303F',
  tintaBajo: '#3E5563',
  suave: '#5C6B74',
  azul: '#0E7CB8',
  azulBajo: '#0A5E8C',
  celeste: '#DCEBF4',
  linea: 'rgba(23,48,63,0.18)',
  lineaPunteada: 'rgba(23,48,63,0.35)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'lavanderia-de-cobertores-talca',
  title: 'Lavandería de Cobertores — ropa de cama impecable en Talca',
  description:
    'Lavandería de barrio en 4½ Oriente, Talca. Cobertores, plumones y ropa de casa: la dejas hoy y la retiras impecable, o te la llevamos. Cotiza por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'El trámite', href: '#tramite' },
  { label: 'Retiro y entrega', href: '#delivery' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

/** Sello mono — el "stamp" del ticket */
function Sello({ codigo, titulo, light = false }: { codigo: string; titulo: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`${mono.className} text-xs md:text-sm font-bold tracking-[0.12em] px-2 py-1 border-2`}
        style={{
          color: light ? C.celeste : C.azulBajo,
          borderColor: light ? 'rgba(220,235,244,0.55)' : C.azulBajo,
          borderRadius: 3,
        }}
      >
        {codigo}
      </span>
      <p
        className={`${mono.className} text-xs md:text-sm tracking-[0.26em] uppercase`}
        style={{ color: light ? C.celeste : C.azulBajo }}
      >
        {titulo}
      </p>
    </div>
  )
}

/** Corte perforado: línea punteada con muescas semicirculares a los lados */
function CortePerforado({ color = C.papel }: { color?: string }) {
  return (
    <div className="relative" aria-hidden="true">
      <div
        className="border-t-2 border-dashed"
        style={{ borderColor: C.lineaPunteada }}
      />
      <span
        className="absolute -top-[11px] -left-[11px] w-[22px] h-[22px] rounded-full"
        style={{ backgroundColor: color }}
      />
      <span
        className="absolute -top-[11px] -right-[11px] w-[22px] h-[22px] rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  )
}

function SitiazoStrip({ dark = false }: { dark?: boolean }) {
  return (
    <p
      className={`${mono.className} text-center text-xs leading-relaxed py-5 px-6`}
      style={{
        color: dark ? 'rgba(220,235,244,0.8)' : C.suave,
        backgroundColor: dark ? 'rgba(9,42,60,0.55)' : C.celeste,
      }}
    >
      Página de muestra hecha por{' '}
      <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2" style={{ color: dark ? '#7FC5E8' : C.azulBajo }}>
        Sitiazo
      </a>{' '}
      — sitios para pymes desde $79.990.{' '}
      <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2" style={{ color: dark ? '#7FC5E8' : C.azulBajo }}>
        Pide la tuya
      </a>
    </p>
  )
}

export default function LavanderiaDeCobertores() {
  return (
    <main id="inicio" className={body.className} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <BlitzNav
        name={<span className={display.className} style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Coordinar"
        fontClass={display.className}
        theme={{ over: 'light', bar: 'rgba(250,244,231,0.94)', ink: C.tinta, line: C.linea, btnBg: C.azul, btnInk: '#FFFFFF' }}
      />

      {/* ═══ HERO — ticket adjunto ═══ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.papel }}>
        {/* trama de costura en el fondo */}
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent 0 46px, ${C.linea} 46px 47px)`,
            maskImage: 'linear-gradient(180deg, transparent 0%, black 18%, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, black 18%, black 70%, transparent 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-14 md:pb-20 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
          <div>
            <Reveal>
              <Sello codigo="TICKET Nº 04-574" titulo="Lavandería · Talca" />
              <h1
                className={`${display.className} mt-5 font-semibold leading-[1.0] tracking-[-0.015em] text-[2.6rem] md:text-[4.6rem]`}
                style={{ color: C.tinta }}
              >
                La ropa de cama de tu casa,{' '}
                <em className="italic" style={{ color: C.azul }}>limpia como nueva.</em>
              </h1>
              <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: C.tintaBajo }}>
                En 4½ Oriente, Talca, lavamos cobertores, plumones y la ropa
                de todos los días en máquinas comerciales. La dejas hoy y la
                retiras doblada — o te la llevamos a la casa.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-flex items-center justify-center text-sm md:text-base font-semibold px-6 h-[52px] rounded-full transition-transform active:scale-95`}
                  style={{ backgroundColor: C.azul, color: '#FFFFFF' }}
                >
                  Cotizar mi lavado
                </a>
                <a
                  href={WA_LINK_DELIVERY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-sm md:text-base font-semibold px-6 h-[52px] rounded-full border-2 transition-transform active:scale-95"
                  style={{ borderColor: C.tinta, color: C.tinta, backgroundColor: 'transparent' }}
                >
                  Que vengan a buscarla
                </a>
              </div>
            </Reveal>
            <Reveal delay={250}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium"
                style={{ color: C.azulBajo }}
              >
                <Stars value={BIZ.rating} color={C.azul} />
                <span>
                  {BIZ.ratingLabel} · {BIZ.reviews} reseñas en Google
                </span>
              </a>
            </Reveal>
          </div>

          {/* ticket adjunto con foto */}
          <Reveal delay={120}>
            <div className="relative max-w-md mx-auto w-full">
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-6 rotate-[-4deg] rounded-sm z-10"
                style={{ backgroundColor: 'rgba(14,124,184,0.35)' }}
                aria-hidden="true"
              />
              <figure
                className="relative rotate-[1.5deg] rounded-md overflow-hidden border shadow-xl"
                style={{ borderColor: C.linea, boxShadow: '0 22px 55px rgba(23,48,63,0.18)' }}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="Lavadoras comerciales y bolsas de ropa de cama en la lavandería de 4½ Oriente, Talca"
                    fill
                    priority
                    sizes="(min-width:1024px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
                {/* talón del ticket */}
                <div style={{ backgroundColor: C.superficie }}>
                  <CortePerforado color={C.superficie} />
                  <figcaption className="px-5 py-4 flex items-center justify-between gap-4">
                    <div>
                      <p className={`${mono.className} text-[0.68rem] tracking-[0.22em] uppercase`} style={{ color: C.suave }}>
                        Recibido en
                      </p>
                      <p className={`${display.className} text-base font-semibold leading-tight`} style={{ color: C.tinta }}>
                        {BIZ.address}, {BIZ.city}
                      </p>
                    </div>
                    <p className={`${mono.className} text-right text-[0.68rem] leading-relaxed`} style={{ color: C.suave }}>
                      L–V 10–19
                      <br />
                      SÁB 10–17
                    </p>
                  </figcaption>
                </div>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ LETRERO — lo que entra al tambor ═══ */}
      <section style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-12">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            {CARGAS.map((c, i) => (
              <span key={c} className="flex items-center gap-5">
                <span
                  className={`${mono.className} text-sm md:text-base font-medium tracking-[0.14em] uppercase`}
                  style={{ color: C.celeste }}
                >
                  {c}
                </span>
                {i < CARGAS.length - 1 && (
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.azul }} aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EL TRÁMITE — talones numerados ═══ */}
      <section id="tramite" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Sello codigo="PASO A PASO" titulo="Cómo funciona" />
            <h2
              className={`${display.className} mt-4 font-semibold tracking-[-0.015em] leading-[1.02] text-3xl md:text-5xl max-w-2xl`}
              style={{ color: C.tinta }}
            >
              Dejas la bolsa. El resto es trámite nuestro.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {TRAMITE.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <article
                  className="relative h-full rounded-md border-2 border-dashed p-6"
                  style={{ borderColor: C.lineaPunteada, backgroundColor: C.superficie }}
                >
                  <span
                    className={`${mono.className} text-4xl font-bold leading-none`}
                    style={{ color: C.azul }}
                  >
                    {p.n}
                  </span>
                  <h3
                    className={`${display.className} mt-3 text-xl font-semibold leading-tight`}
                    style={{ color: C.tinta }}
                  >
                    {p.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: C.tintaBajo }}>
                    {p.detalle}
                  </p>
                  {/* muesca de talón */}
                  <span
                    className="absolute top-1/2 -translate-y-1/2 -right-[9px] w-[16px] h-[16px] rounded-full"
                    style={{ backgroundColor: C.papel, borderRight: `2px dashed ${C.lineaPunteada}` }}
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DELIVERY — banda azul ═══ */}
      <section id="delivery" className="scroll-mt-20" style={{ backgroundColor: C.azulBajo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
            <Reveal>
              <Sello codigo="A DOMICILIO" titulo="Retiro y entrega" light />
              <h2
                className={`${display.className} mt-4 font-semibold tracking-[-0.015em] leading-[1.02] text-3xl md:text-5xl text-white`}
              >
                ¿No puedes pasar? La vamos a buscar.
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed max-w-md" style={{ color: 'rgba(226,240,247,0.92)' }}>
                Coordinamos por WhatsApp el retiro de tu ropa y te la
                devolvemos limpia, seca y doblada. Así de simple.
              </p>
              <a
                href={WA_LINK_DELIVERY}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} mt-8 inline-flex items-center justify-center text-sm md:text-base font-semibold px-6 h-[52px] rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: '#FFFFFF', color: C.azulBajo }}
              >
                Coordinar retiro por WhatsApp
              </a>
            </Reveal>
            <Reveal delay={120}>
              <figure
                className="relative rounded-lg overflow-hidden aspect-[4/5] max-w-sm mx-auto w-full rotate-[-1.5deg] border-4"
                style={{ borderColor: 'rgba(255,255,255,0.85)', boxShadow: '0 24px 60px rgba(9,42,60,0.4)' }}
              >
                <Image
                  src={`${IMG}/secadora.webp`}
                  alt="Secadora industrial Dexter siendo cargada con ropa en la lavandería"
                  fill
                  sizes="(min-width:768px) 40vw, 90vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ ADENTRO — fotos adjuntas ═══ */}
      <section style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Sello codigo="ADENTRO" titulo="El local y sus máquinas" />
            <h2
              className={`${display.className} mt-4 font-semibold tracking-[-0.015em] leading-[1.02] text-3xl md:text-5xl max-w-2xl`}
              style={{ color: C.tinta }}
            >
              Lavadoras comerciales, ropa de verdad.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            {[
              { src: 'ropa-cama', pie: 'Cobertores y plumones, ya embolsados', alt: 'Bolsas con cobertores y ropa de cama lista en la lavandería', ratio: 'aspect-[4/5]', rot: '-rotate-2' },
              { src: 'linea', pie: 'La línea de lavado y secado', alt: 'Lavadoras comerciales LG y secadora Dexter de la lavandería', ratio: 'aspect-[4/5]', rot: 'rotate-1' },
              { src: 'insumos', pie: 'Detergentes y cuidado de prendas', alt: 'Detergentes y productos de lavado sobre las máquinas', ratio: 'aspect-[4/5]', rot: '-rotate-1' },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 90}>
                <figure className={`${f.rot} rounded-md overflow-hidden border bg-white p-2 pb-3`} style={{ borderColor: C.linea, boxShadow: '0 14px 36px rgba(23,48,63,0.12)' }}>
                  <div className={`relative ${f.ratio} overflow-hidden rounded-sm`}>
                    <Image
                      src={`${IMG}/${f.src}.webp`}
                      alt={f.alt}
                      fill
                      sizes="(min-width:640px) 30vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className={`${mono.className} mt-3 text-center text-[0.68rem] tracking-[0.14em] uppercase`}
                    style={{ color: C.tintaBajo }}
                  >
                    {f.pie}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RESEÑAS ═══ */}
      <section id="resenas" className="scroll-mt-20 overflow-hidden" style={{ backgroundColor: C.superficie }}>
        <CortePerforado color={C.papel} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Sello codigo="CLIENTES" titulo="Lo que dicen en Google" />
            <div className="mt-6 flex flex-wrap items-end gap-5">
              <p
                className={`${display.className} text-6xl md:text-8xl font-semibold leading-none tracking-[-0.03em]`}
                style={{ color: C.azul }}
              >
                {BIZ.ratingLabel}
              </p>
              <div className="pb-2">
                <Stars value={BIZ.rating} color={C.azul} className="w-5 h-5" />
                <p className={`${mono.className} mt-2 text-xs tracking-[0.2em] uppercase`} style={{ color: C.suave }}>
                  {BIZ.reviews} reseñas en Google
                </p>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 90}>
                <figure
                  className="h-full rounded-md p-6 border-l-4"
                  style={{ backgroundColor: C.papel, borderLeftColor: C.azul }}
                >
                  <blockquote className="text-base md:text-lg leading-relaxed" style={{ color: C.tinta }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-4 text-xs tracking-[0.15em] uppercase`} style={{ color: C.azulBajo }}>
                    {r.autor} · reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ UBICACIÓN ═══ */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Sello codigo="DIRECCIÓN" titulo="Dónde dejar la ropa" />
            <h2
              className={`${display.className} mt-4 font-semibold tracking-[-0.015em] leading-[1.02] text-3xl md:text-5xl`}
              style={{ color: C.tinta }}
            >
              {BIZ.address}, {BIZ.city}.
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {HORARIO.map((h) => (
              <Reveal key={h.dia}>
                <div
                  className="flex items-center justify-between rounded-md border px-5 py-4"
                  style={{ borderColor: C.linea, backgroundColor: C.superficie }}
                >
                  <p className={`${mono.className} text-xs tracking-[0.18em] uppercase`} style={{ color: C.suave }}>
                    {h.dia}
                  </p>
                  <p className={`${display.className} text-base font-semibold`} style={{ color: C.tinta }}>
                    {h.hora}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-10 rounded-lg overflow-hidden border" style={{ borderColor: C.linea }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa: Lavandería de Cobertores Talca, 4½ Oriente A 0574, Talca"
                className="w-full h-[300px] md:h-[380px] block"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <p className={`${mono.className} text-xs tracking-[0.3em] uppercase`} style={{ color: C.celeste }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
            <h2 className={`${display.className} mt-4 font-semibold tracking-[-0.015em] leading-[1.02] text-3xl md:text-5xl text-white max-w-2xl mx-auto`}>
              El plumón no te cabe en la lavadora. Acá sí.
            </h2>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} mt-9 inline-flex items-center justify-center text-sm md:text-base font-semibold px-8 h-[52px] rounded-full transition-transform active:scale-95`}
              style={{ backgroundColor: C.azul, color: '#FFFFFF' }}
            >
              Escribir por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ backgroundColor: C.papel2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className={`${display.className} font-semibold leading-tight`} style={{ color: C.tinta }}>
                {BIZ.name}
              </p>
              <p className="text-sm" style={{ color: C.suave }}>
                {BIZ.address}, {BIZ.city}
              </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: C.tintaBajo }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">WhatsApp</a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Google Maps</a>
            </div>
          </div>
          <p className={`${mono.className} mt-5 text-xs tracking-[0.15em]`} style={{ color: C.suave }}>
            {BIZ.ratingLabel} ★ · {BIZ.reviews} RESEÑAS EN GOOGLE · {BIZ.phoneDisplay}
          </p>
        </div>
        <SitiazoStrip />
      </footer>

      <WaFab href={WA_LINK} label="WhatsApp" />
    </main>
  )
}
