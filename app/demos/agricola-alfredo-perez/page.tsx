import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, CallFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/bitter/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

// Paleta del saco de semillas: papel kraft, verde de la etiqueta y la
// franja amarilla que llevan sus sacos, con mono para la pizarra de stock.
const C = {
  kraft: '#F4EEDC',
  kraft2: '#EDE4CC',
  card: '#FBF7EA',
  ink: '#262010',
  muted: '#6B6046',
  green: '#3E7A46',
  greenDeep: '#2E5A34',
  yellow: '#F0C53F',
  brick: '#8A4B2A',
  line: 'rgba(38,32,16,0.16)',
  lineLight: 'rgba(255,255,255,0.18)',
  white: '#FFFFFF',
}

export const metadata: Metadata = demoMetadata({
  slug: 'agricola-alfredo-perez',
  title: 'Agrícola y Comercial Alfredo Pérez — Grano, semilla e insumos en 17 Oriente, Talca',
  description:
    'Agrícola y Comercial Alfredo Pérez, 17 Oriente 1018, Talca. Maíz, harinilla, afrechillo, ponedora, semillas, alimento para animales e insumos agrícolas.',
  image: `${IMG}/bodega.webp`,
})

const NAV_LINKS = [
  { label: 'Productos', href: '#productos' },
  { label: 'La bodega', href: '#bodega' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Horario y cómo llegar', href: '#llegar' },
]

// Cartel de productos: lo que se lee en su local y su sacos.
const PRODUCTOS = [
  { t: 'Maíz', d: 'Grano para alimento animal', tag: 'grano' },
  { t: 'Harinilla', d: 'Subproducto de trigo para raciones', tag: 'molienda' },
  { t: 'Afrechillo', d: 'Afrecho para ganado y caballos', tag: 'molienda' },
  { t: 'Ponedora', d: 'Alimento para gallinas ponedoras', tag: 'aves' },
  { t: 'Semillas', d: 'Sacos de semilla certificada', tag: 'campo' },
  { t: 'Alimento para mascotas', d: 'Perros, gatos, conejos y aves', tag: 'casa' },
  { t: 'Insumos agrícolas', d: 'Químicos e insumos varios de campo', tag: 'campo' },
]

const HORARIO = [
  { d: 'Lunes a viernes', h: '8:30 – 13:00 · 15:00 – 18:00' },
  { d: 'Sábado', h: 'Cerrado' },
  { d: 'Domingo', h: 'Cerrado' },
]

const OPINIONES = [
  {
    n: 'Ángeles Muñoz',
    t: 'Lejos el lugar de Talca con los mejores precios en artículos agrícolas, tanto en químicos como en insumos varios.',
    s: 5,
  },
  {
    n: 'Pedro',
    t: 'Muy buena atención.',
    s: 5,
  },
]

export default function AgricolaAlfredoPerez() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ background: C.kraft, color: C.ink }}>
      <BlitzNav
        name={
          <span className={`${display.className} font-bold tracking-tight`} style={{ fontSize: 17 }}>
            Alfredo Pérez<span style={{ color: C.brick }}>.</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={TEL_LINK}
        ctaLabel="Llamar"
        theme={{ over: 'light', bar: C.kraft, ink: C.ink, line: C.line, btnBg: C.green, btnInk: '#FFF' }}
      />

      {/* PORTADA — editorial de almacén, foto ancha bajo el titular */}
      <header id="inicio" style={{ padding: '104px 20px 0', maxWidth: 1060, margin: '0 auto' }}>
        <Reveal>
          <p className={mono.className} style={{ color: C.greenDeep, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 12px' }}>
            Agrícola y Comercial · 17 Oriente, Talca
          </p>
          <h1 className={display.className} style={{ fontSize: 'clamp(38px,9vw,76px)', lineHeight: 1.02, margin: 0, fontWeight: 800, maxWidth: 820 }}>
            El depósito de grano e insumos del barrio
          </h1>
          <p style={{ color: C.muted, fontSize: 'clamp(15px,2.4vw,19px)', maxWidth: 600, margin: '16px 0 0', lineHeight: 1.55 }}>
            Sacos de maíz, harinilla, afrechillo y ponedora, semillas y alimento para animales: venta directa en su local y despacho desde la bodega de 17 Oriente.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, margin: '20px 0 26px' }}>
            <span className={mono.className} style={{ background: C.green, color: C.white, fontSize: 12, padding: '8px 12px', borderRadius: 6 }}>
              {BIZ.rating} ★ · {BIZ.reviews}
            </span>
            <span className={mono.className} style={{ border: `1px solid ${C.line}`, color: C.ink, fontSize: 12, padding: '8px 12px', borderRadius: 6 }}>
              Venta directa en local
            </span>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <figure style={{ margin: 0 }}>
            <div style={{ position: 'relative', aspectRatio: '21/10', borderRadius: 14, overflow: 'hidden', border: `1px solid ${C.line}` }}>
              <Image
                src={`${IMG}/bodega.webp`}
                alt="Bodega de Alfredo Pérez con pallets de sacos apilados y grúa horquilla"
                fill
                priority
                sizes="(max-width:1060px) 100vw, 1060px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <figcaption className={mono.className} style={{ fontSize: 11, color: C.muted, marginTop: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              La bodega: sacos por pallet, listos para despacho
            </figcaption>
          </figure>
        </Reveal>
      </header>

      {/* PRODUCTOS — etiquetas de saco */}
      <section id="productos" style={{ padding: '56px 20px', maxWidth: 1060, margin: '0 auto' }}>
        <Reveal>
          <p className={mono.className} style={{ color: C.greenDeep, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 8px' }}>Lo que venden</p>
          <h2 className={display.className} style={{ fontSize: 'clamp(30px,6vw,50px)', lineHeight: 1.05, margin: '0 0 22px', fontWeight: 800 }}>
            Del saco al pallet
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 12 }}>
          {PRODUCTOS.map((p, i) => (
            <Reveal key={p.t} delay={i * 50}>
              <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 10, overflow: 'hidden', height: '100%' }}>
                <div style={{ height: 6, background: `linear-gradient(90deg, ${C.green} 0 55%, ${C.yellow} 55% 100%)` }} />
                <div style={{ padding: '14px 16px 16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
                    <h3 className={display.className} style={{ fontSize: 19, margin: 0, fontWeight: 800 }}>{p.t}</h3>
                    <span className={mono.className} style={{ fontSize: 10, color: C.greenDeep, letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{p.tag}</span>
                  </div>
                  <p style={{ color: C.muted, fontSize: 13, margin: '6px 0 0', lineHeight: 1.5 }}>{p.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LA BODEGA — bloque verde con tres fotos */}
      <section id="bodega" style={{ background: C.greenDeep, padding: '56px 20px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <Reveal>
            <p className={mono.className} style={{ color: C.yellow, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 8px' }}>La bodega</p>
            <h2 className={display.className} style={{ color: C.white, fontSize: 'clamp(30px,6vw,50px)', lineHeight: 1.05, margin: '0 0 10px', fontWeight: 800 }}>
              Para el campo y para la casa
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 620, margin: '0 0 26px', lineHeight: 1.55 }}>
              Galpón con sacos por pallet y atención en mesón: aquí compra el que cría gallinas en el patio igual que el que alimenta a todo un plantel.
            </p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12 }}>
            <Reveal>
              <figure style={{ margin: 0 }}>
                <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 10, overflow: 'hidden' }}>
                  <Image src={`${IMG}/meson.webp`} alt="Mesón de atención del local con sacos apilados al fondo" fill sizes="(max-width:640px) 92vw, 33vw" style={{ objectFit: 'cover' }} />
                </div>
                <figcaption className={mono.className} style={{ fontSize: 11, color: 'rgba(255,255,255,0.75)', marginTop: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Mesón de venta</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={80}>
              <figure style={{ margin: 0 }}>
                <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 10, overflow: 'hidden' }}>
                  <Image src={`${IMG}/semilla.webp`} alt="Saco de semilla con la franja verde y amarilla característica" fill sizes="(max-width:640px) 92vw, 33vw" style={{ objectFit: 'cover' }} />
                </div>
                <figcaption className={mono.className} style={{ fontSize: 11, color: 'rgba(255,255,255,0.75)', marginTop: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Sacos de semilla</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={160}>
              <figure style={{ margin: 0 }}>
                <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 10, overflow: 'hidden' }}>
                  <Image src={`${IMG}/grano.webp`} alt="Grano a granel visto de cerca" fill sizes="(max-width:640px) 92vw, 33vw" style={{ objectFit: 'cover' }} />
                </div>
                <figcaption className={mono.className} style={{ fontSize: 11, color: 'rgba(255,255,255,0.75)', marginTop: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Grano a granel</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LOCAL — foto fachada + dato de barrio */}
      <section style={{ padding: '56px 20px', maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20, alignItems: 'center' }}>
          <Reveal>
            <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 12, overflow: 'hidden', border: `1px solid ${C.line}` }}>
              <Image src={`${IMG}/local.webp`} alt="Local de Alfredo Pérez con carteles de maíz, harinilla, afrechillo y ponedora" fill sizes="(max-width:640px) 92vw, 45vw" style={{ objectFit: 'cover' }} />
            </div>
          </Reveal>
          <Reveal delay={90}>
            <p className={mono.className} style={{ color: C.greenDeep, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 8px' }}>El local</p>
            <h2 className={display.className} style={{ fontSize: 'clamp(26px,5vw,40px)', lineHeight: 1.08, margin: '0 0 12px', fontWeight: 800 }}>
              Donde el cartel dice maíz, harinilla y afrechillo
            </h2>
            <p style={{ color: C.muted, margin: 0, lineHeight: 1.6 }}>
              En el pasaje industrial de 17 Oriente, el local atiende de lunes a viernes con precios que sus propios clientes marcan como los mejores de Talca en artículos agrícolas.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OPINIONES */}
      <section id="opiniones" style={{ padding: '8px 20px 56px', maxWidth: 920, margin: '0 auto' }}>
        <Reveal>
          <p className={mono.className} style={{ color: C.greenDeep, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 8px' }}>Opiniones en Google</p>
          <h2 className={display.className} style={{ fontSize: 'clamp(28px,5vw,44px)', lineHeight: 1.05, margin: '0 0 6px', fontWeight: 800 }}>
            Los mejores precios, según sus clientes
          </h2>
          <p className={mono.className} style={{ color: C.muted, fontSize: 13, margin: '0 0 22px' }}>
            <Stars value={4.1} color={C.brick} /> {BIZ.rating} de 5 · {BIZ.reviews}
          </p>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 12 }}>
          {OPINIONES.map((o, i) => (
            <Reveal key={o.n} delay={i * 80}>
              <blockquote style={{ background: C.card, border: `1px solid ${C.line}`, borderLeft: `5px solid ${C.yellow}`, borderRadius: 10, padding: '18px', margin: 0, height: '100%' }}>
                <Stars value={o.s} color={C.brick} />
                <p style={{ color: C.ink, fontSize: 14, lineHeight: 1.6, margin: '10px 0 14px' }}>“{o.t}”</p>
                <cite className={mono.className} style={{ color: C.muted, fontSize: 12, fontStyle: 'normal', letterSpacing: '0.06em' }}>— {o.n}</cite>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HORARIO Y MAPA — pizarra de bodega */}
      <section id="llegar" style={{ background: C.kraft2, borderTop: `1px solid ${C.line}`, padding: '56px 20px' }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <Reveal>
            <p className={mono.className} style={{ color: C.greenDeep, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 8px' }}>Horario y cómo llegar</p>
            <h2 className={display.className} style={{ fontSize: 'clamp(28px,5vw,44px)', lineHeight: 1.05, margin: '0 0 20px', fontWeight: 800 }}>
              17 Oriente 1018, Talca
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))', gap: 16 }}>
            <Reveal>
              <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: 20, height: '100%' }}>
                <dl className={mono.className} style={{ margin: 0, fontSize: 13, lineHeight: 1.9 }}>
                  <div><dt style={{ color: C.muted, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Dirección</dt><dd style={{ margin: '0 0 8px', color: C.ink, fontWeight: 600 }}>{BIZ.address}, {BIZ.city}</dd></div>
                  <div><dt style={{ color: C.muted, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Teléfono</dt><dd style={{ margin: '0 0 8px' }}><a href={TEL_LINK} style={{ color: C.greenDeep, fontWeight: 600 }}>{BIZ.phoneTel}</a></dd></div>
                </dl>
                <table className={mono.className} style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12, marginTop: 6 }}>
                  <tbody>
                    {HORARIO.map((h) => (
                      <tr key={h.d} style={{ borderTop: `1px dashed ${C.line}` }}>
                        <td style={{ padding: '8px 0', color: C.muted }}>{h.d}</td>
                        <td style={{ padding: '8px 0', color: C.ink, fontWeight: 600, textAlign: 'right' }}>{h.h}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={mono.className}
                  style={{ display: 'inline-block', marginTop: 14, background: C.green, color: C.white, fontSize: 13, fontWeight: 600, padding: '12px 18px', borderRadius: 10, textDecoration: 'none', minHeight: 48 }}
                >
                  Abrir en Google Maps →
                </a>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div style={{ borderRadius: 12, overflow: 'hidden', border: `1px solid ${C.line}`, height: 320 }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}`}
                  className="w-full h-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: C.greenDeep, padding: '26px 20px 108px' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
          <span className={display.className} style={{ color: C.white, fontSize: 18, fontWeight: 800 }}>
            Alfredo Pérez<span style={{ color: C.yellow }}>.</span>
          </span>
          <p className={mono.className} style={{ color: 'rgba(255,255,255,0.8)', fontSize: 11, margin: 0, letterSpacing: '0.06em' }}>
            {BIZ.name} · {BIZ.address}, {BIZ.city} · {BIZ.phoneTel}
          </p>
        </div>
      </footer>

      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.brick} fg="#FFF" />
    </div>
  )
}
