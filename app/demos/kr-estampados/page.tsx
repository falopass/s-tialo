import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, CATALOGO, TRABAJOS, PROCESO, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «la hoja de troquel». Negro carbón de taller con
 * el lima de la R de su propio logo, Anton de afiche de feria y líneas
 * de corte punteadas como sticker por despegar. Las fotos son sus
 * publicaciones reales: catálogo, series para clubes y ferias.
 */
const C = {
  carbon: '#14140F',
  panel: '#1D1D16',
  lime: '#C6F24E',
  paper: '#F4F1E8',
  inkSoft: 'rgba(244,241,232,0.62)',
  line: 'rgba(198,242,78,0.22)',
}

const CUT = `repeating-linear-gradient(90deg, ${C.lime} 0 7px, transparent 7px 15px)`

export const metadata: Metadata = demoMetadata({
  slug: 'kr-estampados',
  title: `${BIZ.name} · Estampado personalizado en Talca`,
  description:
    'Poleras, polerones, gorras, tazas, chapitas y banderas estampadas en Talca. Cotiza por WhatsApp y retira en 5 Oriente 457. Tu diseño, compromiso y calidad.',
  image: `${IMG}/p12.webp`,
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

function CutLine({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className="h-[3px] w-full"
      style={{ backgroundImage: CUT, transform: flip ? 'scaleX(-1)' : undefined }}
      aria-hidden="true"
    />
  )
}

function Sku({ children }: { children: string }) {
  return (
    <span
      className={`${mono.className} inline-block text-[10px] font-medium tracking-[0.18em] px-2 py-0.5 rounded-sm`}
      style={{ border: `1px solid ${C.line}`, color: C.lime }}
    >
      {children}
    </span>
  )
}

export default function KrEstampadosPage() {
  return (
    <div className={body.className} style={{ backgroundColor: C.carbon, color: C.paper }}>
      <BlitzNav
        name={
          <span className={`${display.className} tracking-wide uppercase`}>
            KR<span style={{ color: C.lime }}>·</span>Estampados
          </span>
        }
        links={[
          { label: 'Catálogo', href: '#catalogo' },
          { label: 'Trabajos', href: '#trabajos' },
          { label: 'Cómo pedir', href: '#proceso' },
          { label: 'Taller', href: '#taller' },
        ]}
        waLink={WA_LINK}
        ctaLabel="Cotizar"
        logoSrc={`${IMG}/logo.webp`}
        theme={{ over: 'dark', bar: 'rgba(20,20,15,0.95)', ink: C.paper, line: C.line, btnBg: C.lime, btnInk: '#14140F' }}
      />

      {/* Portada: afiche de taller */}
      <header id="inicio" className="relative pt-28 pb-10 md:pt-36 md:pb-14 overflow-hidden" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em]`} style={{ color: C.lime }}>
              {BIZ.rubro} · {BIZ.slogan} · {BIZ.city}
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h1
              className={`${display.className} mt-4 uppercase leading-[0.98] tracking-[0.01em]`}
              style={{ fontSize: 'clamp(38px, 8.5vw, 96px)' }}
            >
              Tu diseño,
              <br />
              <span style={{ color: C.lime }}>estampado</span> en Talca
            </h1>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-5 max-w-lg text-[15px] md:text-[17px] leading-relaxed" style={{ color: C.inkSoft }}>
              Poleras, polerones, gorras, tazas, chapitas y banderas con tu logo o tu idea. Cotizas por WhatsApp, retiras en 5 Oriente.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center justify-center h-[48px] px-7 text-[13px] font-bold uppercase tracking-[0.12em] rounded-sm active:scale-95 transition-transform tap-44`}
                style={{ backgroundColor: C.lime, color: '#14140F' }}
              >
                Cotizar mi estampado
              </a>
              <span className={`${mono.className} flex items-center gap-2 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.inkSoft }}>
                <Stars value={BIZ.rating} color={C.lime} className="w-3.5 h-3.5" />
                {BIZ.ratingLabel} · {BIZ.reviews} opiniones
              </span>
            </div>
          </Reveal>
          {/* Tira de producto real */}
          <Reveal delay={320}>
            <div className="mt-10 grid grid-cols-3 md:grid-cols-4 gap-2.5">
              {[
                { src: `${IMG}/p11.webp`, alt: 'Gorras trucker estampadas en varios colores' },
                { src: `${IMG}/p12.webp`, alt: 'Poleras con diseño propio frente y espalda' },
                { src: `${IMG}/p13.webp`, alt: 'Polerones negros personalizados' },
                { src: `${IMG}/p17.webp`, alt: 'Banderas impresas para evento ciclista', extra: 'hidden md:block' },
              ].map((f) => (
                <div
                  key={f.src}
                  className={`relative overflow-hidden rounded-md ${f.extra ?? ''}`}
                  style={{ aspectRatio: '1/1', border: `1px solid ${C.line}` }}
                >
                  <Image src={f.src} alt={f.alt} fill sizes="(max-width:768px) 33vw, 25vw" className="object-cover" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </header>

      <CutLine />

      {/* Catálogo: pliego con troquel */}
      <section id="catalogo" className="py-14 md:py-20" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-3`} style={{ color: C.lime }}>
                  Pliego de productos
                </p>
                <h2 className={`${display.className} text-3xl md:text-[52px] uppercase leading-[1]`}>
                  Qué estampan
                </h2>
              </div>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.inkSoft }}>
                Desde 1 unidad · Por docena · Por cientos
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {CATALOGO.map((p, i) => (
              <Reveal key={p.sku} delay={i * 60}>
                <div
                  className={`rounded-md overflow-hidden ${i === 0 ? 'col-span-2 md:col-span-1' : ''}`}
                  style={{ backgroundColor: C.carbon, border: `1px dashed rgba(198,242,78,0.45)` }}
                >
                  <div className="relative" style={{ aspectRatio: '1/1' }}>
                    <Image src={p.src} alt={p.alt} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover" />
                    <div className="absolute top-2 left-2"><Sku>{p.sku}</Sku></div>
                  </div>
                  <div className="px-3.5 py-3">
                    <h3 className={`${display.className} text-lg md:text-xl uppercase`}>{p.nombre}</h3>
                    <p className="mt-1 text-[12.5px] leading-snug" style={{ color: C.inkSoft }}>
                      {p.detalle}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={CATALOGO.length * 60}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md h-full min-h-[140px] flex flex-col items-center justify-center gap-2 text-center p-5 active:scale-95 transition-transform tap-44"
                style={{ backgroundColor: C.lime, color: '#14140F' }}
              >
                <span className={`${display.className} text-xl md:text-2xl uppercase leading-tight`}>
                  ¿Y lo que<br />no está aquí?
                </span>
                <span className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.14em]`}>
                  Pregunta por WhatsApp
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <CutLine flip />

      {/* Trabajos reales: serie/cliente */}
      <section id="trabajos" className="py-14 md:py-20" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-3`} style={{ color: C.lime }}>
              Salidos del taller
            </p>
            <h2 className={`${display.className} text-3xl md:text-[52px] uppercase leading-[1] mb-10`}>
              Marcas que ya imprimen con ellos
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {TRABAJOS.map((t, i) => (
              <Reveal key={t.src} delay={i * 80}>
                <figure>
                  <div
                    className="relative overflow-hidden rounded-md"
                    style={{ aspectRatio: '4/5', border: `1px solid ${C.line}` }}
                  >
                    <Image src={t.src} alt={t.alt} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" />
                  </div>
                  <figcaption className="mt-2.5 flex items-start justify-between gap-2">
                    <div>
                      <p className={`${display.className} text-[15px] uppercase leading-tight`}>{t.cliente}</p>
                      <p className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mt-0.5`} style={{ color: C.inkSoft }}>
                        {t.que}
                      </p>
                    </div>
                    <Sku>{`KR-${String(i + 1).padStart(2, '0')}`}</Sku>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo pedir: ticket de trabajo */}
      <section id="proceso" className="py-14 md:py-20" style={{ backgroundColor: C.lime, color: '#14140F' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-3`} style={{ color: 'rgba(20,20,15,0.6)' }}>
              Orden de pedido
            </p>
            <h2 className={`${display.className} text-3xl md:text-[52px] uppercase leading-[1] mb-10`}>
              De la idea a la prenda en dos días
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {PROCESO.map((p, i) => (
              <Reveal key={p.paso} delay={i * 100}>
                <div
                  className="rounded-md p-5 h-full"
                  style={{ backgroundColor: '#14140F', color: C.paper, boxShadow: '0 14px 30px -18px rgba(20,20,15,0.5)' }}
                >
                  <p className={`${display.className} text-[40px] leading-none`} style={{ color: C.lime }}>{p.paso}</p>
                  <h3 className={`${display.className} mt-3 text-xl uppercase`}>{p.nombre}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: C.inkSoft }}>
                    {p.detalle}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={220}>
            <div className="mt-10">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center justify-center h-[48px] px-7 text-[13px] font-bold uppercase tracking-[0.12em] rounded-sm active:scale-95 transition-transform tap-44`}
                style={{ backgroundColor: '#14140F', color: C.lime }}
              >
                Mandar mi diseño por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Opiniones reales */}
      <section className="py-14 md:py-20" style={{ backgroundColor: C.panel }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-3`} style={{ color: C.lime }}>
              Control de calidad según clientes
            </p>
            <h2 className={`${display.className} text-3xl md:text-[44px] uppercase leading-[1] mb-10`}>
              {BIZ.ratingLabel} de 5 en Google, {BIZ.reviews} opiniones
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 70}>
                <blockquote className="rounded-md p-5 h-full" style={{ backgroundColor: C.carbon, border: `1px solid ${C.line}` }}>
                  <Stars value={r.estrellas} color={C.lime} className="w-3.5 h-3.5" />
                  <p className="mt-3 text-[14.5px] leading-relaxed">“{r.texto}”</p>
                  <footer className={`${mono.className} mt-4 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.inkSoft }}>
                    {r.nombre} · {r.hace}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Taller: dirección + mapa */}
      <section id="taller" className="py-14 md:py-20" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.lime }}>
                El taller
              </p>
              <h2 className={`${display.className} text-3xl md:text-[44px] uppercase leading-[1.02]`}>
                {BIZ.address}, centro de {BIZ.city}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.inkSoft }}>
                Abren desde las 9:00. Lo más rápido es escribir por WhatsApp con tu diseño o tu idea y cotizan al tiro.
              </p>
              <div className={`${mono.className} mt-6 space-y-2.5 text-[12px] uppercase tracking-[0.14em]`} style={{ color: C.inkSoft }}>
                <p>
                  <span style={{ color: C.lime }}>DIR&nbsp;&nbsp;</span>{BIZ.address} · {BIZ.city}
                </p>
                <p>
                  <span style={{ color: C.lime }}>TEL&nbsp;&nbsp;</span>
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-4 tap-44">{BIZ.phoneDisplay}</a>
                </p>
                <p>
                  <span style={{ color: C.lime }}>IG&nbsp;&nbsp;&nbsp;</span>
                  <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 tap-44">@estampados.talca</a>
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} inline-flex items-center justify-center h-[46px] px-6 text-[12.5px] font-bold uppercase tracking-[0.12em] rounded-sm active:scale-95 transition-transform tap-44`}
                  style={{ backgroundColor: C.lime, color: '#14140F' }}
                >
                  Cotizar por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} inline-flex items-center justify-center h-[46px] px-6 text-[12.5px] font-bold uppercase tracking-[0.12em] rounded-sm tap-44`}
                  style={{ border: `1px solid ${C.lime}`, color: C.lime }}
                >
                  Cómo llegar
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="p-1.5 rounded-md" style={{ border: `1px dashed rgba(198,242,78,0.45)` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full min-h-[320px] h-full rounded-sm"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CutLine />

      <footer style={{ backgroundColor: '#0F0F0C' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/logo.webp`} alt="Logo de KR Estampados" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <p className={`${display.className} text-lg uppercase leading-tight`}>{BIZ.name}</p>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-0.5`} style={{ color: C.lime }}>
                {BIZ.slogan} · {BIZ.city}
              </p>
            </div>
          </div>
          <address className="not-italic text-xs leading-relaxed" style={{ color: C.inkSoft }}>
            {BIZ.address}, {BIZ.city} · {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            {' · '}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">WhatsApp</a>
            {' · '}
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">Instagram</a>
          </address>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.inkSoft }}>
            {BIZ.ratingLabel} ★ · {BIZ.reviews} opiniones
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
