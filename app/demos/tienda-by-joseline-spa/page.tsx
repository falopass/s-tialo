import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, waLinkProducto, WA_CATALOG, MAPS_URL, MAPS_EMBED, IMG, CATEGORIAS, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/prata/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Paleta del material real de la tienda: negro de la marca caligráfica,
// el rosa de sus productos y blanco de vitrina.
const C = {
  ink: '#161214',
  noir: '#241C20',
  pink: '#E6378C',
  pinkSoft: '#FBD9EA',
  pinkDeep: '#B31E68',
  paper: '#FFFFFF',
  soft: '#FAF3F6',
  muted: '#6E5A63',
  line: 'rgba(22,18,20,0.14)',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B31E68]'

export const metadata: Metadata = demoMetadata({
  slug: 'tienda-by-joseline-spa',
  title: 'Tienda By Joseline Spa — Lencería y más en Pencahue',
  description:
    'Tienda By Joseline Spa en Brisas de Pencahue: ropa femenina, lencería, sexshop y cuidado personal. Catálogo por WhatsApp, envíos a todo Chile y 5,0 estrellas en Google.',
  image: `${IMG}/mist-misucka.webp`,
})

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'La tienda', href: '#la-tienda' },
]

// Productos visibles en las fotos reales del perfil de la tienda.
const VITRINA = [
  { img: 'mist-misucka.webp', alt: 'Mist corporal Misucka rosa con colgante de estrella, línea Shimmer Fragrance Mist', tag: 'Mist corporal', name: 'Misucka · Sheer Seduction' },
  { img: 'lenceria-encaje.webp', alt: 'Conjunto de lencería de encaje negro exhibido por la tienda', tag: 'Lencería', name: 'Conjunto de encaje' },
  { img: 'locion-hot.webp', alt: 'Loción corporal Hot en envase naranjo de 150 ml', tag: 'Cuidado personal', name: 'Loción Hot · 150 ml' },
  { img: 'lovely-vibes.webp', alt: 'Mist corporal Lovely Vibes en envase rosa', tag: 'Mist corporal', name: 'Lovely Vibes · Pink Shot' },
  { img: 'perfume-sauvage.webp', alt: 'Perfume azul con su caja exhibido por la tienda', tag: 'Perfumería', name: 'Perfume para él' },
  { img: 'producto-rosa.webp', alt: 'Accesorio de bienestar rosa de la sección sexshop', tag: 'Sexshop', name: 'Bienestar íntimo' },
] as const

/** Etiqueta de precio colgante: el motivo gráfico de la vitrina. */
function Tag({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-2 text-[11px] md:text-xs uppercase tracking-[0.14em] font-bold pl-4 pr-3.5 py-1.5`}
      style={{
        backgroundColor: dark ? C.pink : C.noir,
        color: dark ? '#fff' : C.pinkSoft,
        clipPath: 'polygon(0 50%, 10px 0, 100% 0, 100% 100%, 10px 100%)',
      }}
    >
      {children}
    </span>
  )
}

function WaBtn({ href, label, ghost = false, dark = false }: { href: string; label: string; ghost?: boolean; dark?: boolean }) {
  return (
    <a
      href={href}
      target={href.startsWith('#') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className={`${display.className} inline-block text-base md:text-lg px-8 py-3 rounded-full transition-all hover:-translate-y-0.5 active:scale-95 tap-44 ${FOCUS}`}
      style={
        ghost
          ? { border: `1.5px solid ${dark ? 'rgba(255,255,255,0.55)' : C.ink}`, color: dark ? '#fff' : C.ink }
          : { backgroundColor: C.pink, color: '#fff', boxShadow: `0 5px 0 ${C.pinkDeep}` }
      }
    >
      {label}
    </a>
  )
}

// Iconos lineales propios, estilo de la tarjeta de marca de la tienda.
const ICONS: Record<string, React.ReactNode> = {
  dress: <path d="M9 3c.6 1.4 1.4 2 3 2s2.4-.6 3-2l2 3-1.6 2.4c.9 1.6 2.6 5.2 3.1 9.6-2.1 1.5-4.6 2-7.5 2s-5.4-.5-7.5-2c.5-4.4 2.2-8 3.1-9.6L5 6l4-3Z" />,
  lace: <><path d="M4 10c2-1.6 4-2 8-2s6 .4 8 2l-1.4 4.6c-1.5 1-3.6 1.5-5.3 1.1L12 19l-1.3-3.3c-1.7.4-3.8-.1-5.3-1.1L4 10Z" /><path d="M8 5c1.2 1 4.8 1 8 0" /></>,
  spark: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" /></>,
  drop: <path d="M12 3.5c3.2 4.4 6 8.2 6 11a6 6 0 0 1-12 0c0-2.8 2.8-6.6 6-11Z" />,
}
const CAT_ICONS = ['dress', 'lace', 'spark', 'drop'] as const

export default function TiendaByJoselineSpaPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <style>{`html { scroll-behavior: auto }`}</style>

      <div className="h-0" style={{ backgroundColor: C.paper }}>
        <BlitzNav
          name={
            <span className="flex items-center gap-2.5">
              <Image src={`${IMG}/avatar.webp`} alt="Foto de perfil de Joseline, dueña de la tienda" width={32} height={32} className="w-8 h-8 rounded-full object-cover" />
              <span className={`${display.className}`}>{BIZ.short}</span>
            </span>
          }
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass=""
          theme={{ over: 'light', bar: 'rgba(255,255,255,0.95)', ink: C.ink, line: C.line, btnBg: C.pink, btnInk: '#fff' }}
        />
      </div>

      {/* ── Hero: vitrina con tarjeta de marca + productos reales ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-14 md:pb-20">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-12 items-center">
            <Reveal>
              <Tag>Tu tienda de confianza · {BIZ.city}</Tag>
              <h1 className={`${display.className} leading-[1.02] text-[clamp(2.6rem,8.5vw,5.2rem)] mt-6`}>
                Todo lo que te hace sentir
                <span className="italic" style={{ color: C.pink }}> única, segura y poderosa</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-md mt-6 mb-5" style={{ color: C.muted }}>
                Ropa femenina, lencería, sexshop y cuidado personal en{' '}
                {BIZ.address}, {BIZ.city}. Te atiende Joseline por WhatsApp
                y hay envíos a todo Chile.
              </p>
              <div className="flex items-center gap-3 mb-8">
                <Stars value={5} color={C.pink} />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} text-xs md:text-sm underline underline-offset-4 decoration-2 tap-44`}
                  style={{ color: C.ink, textDecorationColor: C.pink }}
                >
                  {BIZ.rating} · {BIZ.reviews} reseñas en Google
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                <WaBtn href={WA_CATALOG} label="Ver catálogo en WhatsApp" />
                <WaBtn href="#vitrina" label="Ver la vitrina" ghost />
              </div>
            </Reveal>

            {/* collage de producto real: tarjeta + dos fotos */}
            <div className="relative">
              <Reveal delay={80}>
                <figure className="relative overflow-hidden rounded-[24px] border bg-white" style={{ borderColor: C.line, transform: 'rotate(-2deg)', boxShadow: '0 18px 40px rgba(22,18,20,0.12)' }}>
                  <div className="relative aspect-[4/3]">
                    <Image src={`${IMG}/tarjeta-marca.webp`} alt="Tarjeta de marca de la tienda: Tienda by Joseline Spa con sus categorías" fill priority sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
                  </div>
                </figure>
              </Reveal>
              <Reveal delay={200} className="absolute -bottom-8 -right-2 md:-right-6 w-[42%]">
                <figure className="relative overflow-hidden rounded-[18px] border-4 border-white" style={{ transform: 'rotate(3deg)', boxShadow: '0 16px 36px rgba(22,18,20,0.22)' }}>
                  <div className="relative aspect-[3/4]">
                    <Image src={`${IMG}/mist-misucka.webp`} alt="Mist corporal Misucka rosa, producto real de la tienda" fill priority sizes="200px" className="object-cover" />
                  </div>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
        {/* faja de datos */}
        <div className="border-y" style={{ borderColor: C.line, backgroundColor: C.pinkSoft }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.14em]`} style={{ color: C.noir }}>
            <span>Abre {BIZ.abre}</span>
            <span>Envíos a todo Chile</span>
            <span>{BIZ.tiktokUser} en TikTok</span>
            <span className="hidden md:inline" style={{ color: C.pinkDeep }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Categorías tal como las publica la tienda ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.28em] mb-8 text-center`} style={{ color: C.pinkDeep }}>
            Las cuatro líneas de la tienda
          </p>
        </Reveal>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {CATEGORIAS.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 80}>
              <li>
                <a
                  href={waLinkProducto(cat.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block h-full border rounded-[20px] p-5 md:p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg tap-44 ${FOCUS}`}
                  style={{ borderColor: C.line, backgroundColor: C.paper }}
                >
                  <span
                    className="inline-flex w-12 h-12 items-center justify-center rounded-full mb-4 transition-colors group-hover:text-white"
                    style={{ backgroundColor: C.pinkSoft, color: C.pinkDeep }}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      {ICONS[CAT_ICONS[i]]}
                    </svg>
                  </span>
                  <h3 className={`${display.className} text-lg md:text-xl leading-snug`}>{cat.name}</h3>
                  <p className="text-xs md:text-sm leading-relaxed mt-2" style={{ color: C.muted }}>{cat.desc}</p>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── La vitrina: productos reales como tarjetas con etiqueta ── */}
      <section id="vitrina" className="scroll-mt-20" style={{ backgroundColor: C.noir }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-5 mb-10 md:mb-14">
              <div>
                <Tag dark>En la vitrina ahora</Tag>
                <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.0] mt-5`} style={{ color: '#fff' }}>
                  Lo que se ve
                  <span className="italic" style={{ color: C.pink }}> es lo que hay</span>
                </h2>
              </div>
              <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: 'rgba(255,255,255,0.62)' }}>
                Fotos reales publicadas por la tienda. El precio y el stock
                se confirman por WhatsApp — la dueña responde ella misma.
              </p>
            </div>
          </Reveal>
          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {VITRINA.map((p, i) => (
              <Reveal key={p.img} delay={i * 70}>
                <li className="group relative">
                  <a
                    href={waLinkProducto(p.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block overflow-hidden rounded-[20px] bg-white transition-transform hover:-translate-y-1 tap-44 ${FOCUS}`}
                  >
                    <div className="relative aspect-[3/3.4]">
                      <Image src={`${IMG}/${p.img}`} alt={p.alt} fill loading="lazy" sizes="(min-width: 1024px) 30vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                    </div>
                    <div className="px-4 md:px-5 py-4 flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] font-bold`} style={{ color: C.pinkDeep }}>{p.tag}</p>
                        <p className={`${display.className} text-base md:text-lg leading-snug truncate`} style={{ color: C.ink }}>{p.name}</p>
                      </div>
                      <span
                        className={`${mono.className} shrink-0 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full transition-colors group-hover:text-white`}
                        style={{ backgroundColor: C.pinkSoft, color: C.pinkDeep }}
                      >
                        Consultar
                      </span>
                    </div>
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-[20px] p-6 md:p-8" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
              <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.75)' }}>
                La vitrina completa está en el{' '}
                <strong className="text-white">catálogo de WhatsApp</strong>:
                escribes, ves todo lo disponible y encargas directo.
              </p>
              <WaBtn href={WA_CATALOG} label="Abrir el catálogo" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.28em] mb-4`} style={{ color: C.pinkDeep }}>
              Palabra de clientas
            </p>
            <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.0]`}>
              {BIZ.rating} en Google
              <span className="italic" style={{ color: C.pink }}> · {BIZ.reviews} reseñas</span>
            </h2>
          </div>
        </Reveal>
        <ul className="grid md:grid-cols-3 gap-4 md:gap-6">
          {RESENAS.map((r, i) => (
            <Reveal key={r.author} delay={i * 90}>
              <figure className="h-full border rounded-[20px] p-6 md:p-7 flex flex-col" style={{ borderColor: C.line, backgroundColor: C.soft }}>
                <Stars value={5} color={C.pink} className="w-3.5 h-3.5" />
                <blockquote className="text-sm md:text-base leading-relaxed mt-4 mb-5 flex-1" style={{ color: C.ink }}>
                  “{r.text}”
                </blockquote>
                <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.12em] font-bold`} style={{ color: C.pinkDeep }}>
                  {r.author} <span className="normal-case font-normal" style={{ color: C.muted }}>· reseña de Google</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={160}>
          <p className="text-center mt-8">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} text-xs md:text-sm underline underline-offset-4 decoration-2 tap-44`}
              style={{ color: C.ink, textDecorationColor: C.pink }}
            >
              Ver la ficha en Google Maps →
            </a>
          </p>
        </Reveal>
      </section>

      {/* ── La tienda: fachada real + mapa ── */}
      <section id="la-tienda" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <Reveal>
              <figure className="overflow-hidden rounded-[24px] border" style={{ borderColor: C.line, boxShadow: '0 18px 40px rgba(22,18,20,0.12)' }}>
                <div className="relative aspect-[3/3.6]">
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de Tienda By Joseline Spa: letrero blanco sobre la casa en Brisas de Pencahue"
                    fill
                    loading="lazy"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.14em] px-4 py-2.5`} style={{ backgroundColor: C.noir, color: C.pinkSoft }}>
                  Brisas de Pencahue 2 · casa 832
                </figcaption>
              </figure>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {['Discreción', 'Calidad', 'Confianza', 'Envíos a todo Chile'].map((v) => (
                  <span key={v} className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.12em] font-bold px-3.5 py-1.5 rounded-full border`} style={{ borderColor: C.pink, color: C.pinkDeep, backgroundColor: C.pinkSoft }}>
                    {v}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={140}>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.28em] mb-4`} style={{ color: C.pinkDeep }}>
                La tienda
              </p>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02] mb-6`}>
                Una casa en
                <br />
                <span className="italic" style={{ color: C.pink }}>Brisas de Pencahue</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
                La tienda funciona en {BIZ.address}, {BIZ.city}. Se reconoce
                por su letrero blanco y su rosado: es la vitrina de barrio
                para lencería y cuidado personal, con retiro coordinado y
                envíos a todo Chile.
              </p>
              <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
                {BIZ.address}, {BIZ.city}, {BIZ.region}
                <br />
                <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} underline underline-offset-4 decoration-2 tap-44`} style={{ color: C.ink, textDecorationColor: C.pink }}>
                  {BIZ.phoneDisplay}
                </a>
                <br />
                Abre {BIZ.abre} hrs
              </address>
              <div className="flex flex-wrap gap-3">
                <WaBtn href={WA_LINK} label="Escribir a Joseline" />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-block text-base md:text-lg px-8 py-3 rounded-full transition-all hover:-translate-y-0.5 tap-44 ${FOCUS}`}
                  style={{ border: `1.5px solid ${C.ink}`, color: C.ink }}
                >
                  Cómo llegar →
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={180}>
            <div className="mt-10 overflow-hidden rounded-[24px] border min-h-[300px]" style={{ borderColor: C.line }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.noir }}>
        <div className="absolute inset-0 opacity-[0.14]" style={{ backgroundImage: `url(${IMG}/marca-encaje.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-5`} style={{ color: C.pinkSoft }}>
              Gracias por elegirnos
            </p>
            <h2 className={`${display.className} text-[clamp(2.3rem,7vw,4.4rem)] leading-[1.02] mb-8`} style={{ color: '#fff' }}>
              El catálogo completo
              <br />
              <span className="italic" style={{ color: C.pink }}>es un WhatsApp</span>
            </h2>
            <WaBtn href={WA_CATALOG} label="Abrir catálogo de WhatsApp" />
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.noir, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center gap-4">
          <Image src={`${IMG}/avatar.webp`} alt="Foto de perfil de Joseline" width={36} height={36} className="w-9 h-9 rounded-full object-cover" />
          <div>
            <p className={`${display.className} text-lg`} style={{ color: '#fff' }}>{BIZ.name}</p>
            <address className={`${mono.className} not-italic text-[11px]`} style={{ color: 'rgba(255,255,255,0.5)' }}>
              {BIZ.address} · {BIZ.city} · {BIZ.instagramUser}
            </address>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.pink }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Fotos, reseñas y datos tomados de su ficha de Google Maps y sus redes públicas.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.pink }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
