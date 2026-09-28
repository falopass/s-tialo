import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_HORA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/instrument-serif/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/instrument-serif/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Paleta derivada de las fotos reales: el muro fucsia del estudio,
// los tonos crema de la piel y el ciruela profundo del pelo.
const C = {
  ink: '#2B1420',
  plum: '#4A1F33',
  pink: '#C9356E',
  pinkDeep: '#9E2453',
  blush: '#F5D9E4',
  cream: '#FBF5EF',
  card: '#FFFFFF',
  muted: '#7A5C68',
  line: 'rgba(43,20,32,0.14)',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2453]'

export const metadata: Metadata = demoMetadata({
  slug: 'hair-home-studio-claudia-beltran',
  title: 'Hair Home studio Claudia Beltrán — Alisados y pestañas en Linares',
  description:
    'Home studio de Claudia Beltrán en Los Andes 1384, Linares: alisados permanentes, lifting de pestañas y estética con hora agendada por WhatsApp. 5,0 estrellas en Google.',
  image: `${IMG}/alisado-1.webp`,
})

const NAV_LINKS = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'El estudio', href: '#estudio' },
  { label: 'Contacto', href: '#contacto' },
]

// Resultados reales publicados en la ficha de Maps del estudio.
const TRABAJOS = [
  { img: 'alisado-1.webp', alt: 'Resultado de alisado permanente: pelo oscuro liso de espalda frente al muro fucsia del estudio', cap: 'Alisado permanente', wide: false },
  { img: 'pestanas.webp', alt: 'Primer plano de lifting de pestañas con cinta de silicón rosa en la frente', cap: 'Lifting de pestañas', wide: false },
  { img: 'alisado-rubio.webp', alt: 'Alisado sobre pelo rubio, resultado liso y con brillo', cap: 'Alisado + brillo', wide: false },
  { img: 'alisado-3.webp', alt: 'Alisado permanente sobre pelo castaño cobrizo, terminación pareja', cap: 'Alisado castaño', wide: false },
  { img: 'alisado-2.webp', alt: 'Pelo largo negro liso después de alisado, frente a puerta de madera', cap: 'Alisado largo', wide: false },
  { img: 'estudio.webp', alt: 'Interior del home studio: muro fucsia, camilla, espejo y aro de luz', cap: 'El estudio por dentro', wide: true },
]

const SERVICIOS = [
  {
    n: '01',
    name: 'Alisado permanente',
    desc: 'El servicio insignia del estudio: progresivo y permanente, con terminación lisa y brillante que se ve en cada foto de trabajo.',
    img: 'alisado-4.webp',
    alt: 'Resultado de alisado permanente sobre pelo largo oscuro con chaqueta de flores',
  },
  {
    n: '02',
    name: 'Lifting de pestañas',
    desc: 'Curvatura y apertura de la mirada sin extensiones: tus propias pestañas, levantadas.',
    img: 'pestanas.webp',
    alt: 'Detalle de pestañas levantadas tras un lifting, con accesorio rosa en la frente',
  },
  {
    n: '03',
    name: 'Home studio con hora agendada',
    desc: 'Atención de a una, en cabina propia en Los Andes, Linares. Se agenda y se confirma por WhatsApp.',
    img: 'estudio.webp',
    alt: 'Cabina del estudio con muro fucsia, espejo de cuerpo completo y aro de luz',
  },
] as const

/** Marco en arco (medio arco superior), la forma distintiva del demo. */
function Arch({
  img,
  alt,
  tall = false,
  caption,
}: {
  img: string
  alt: string
  tall?: boolean
  caption?: string
}) {
  return (
    <figure
      className="relative overflow-hidden border"
      style={{
        borderColor: C.line,
        borderRadius: '999px 999px 0 0',
        backgroundColor: C.blush,
      }}
    >
      <div className={`relative w-full ${tall ? 'aspect-[3/4.2]' : 'aspect-[3/4]'}`}>
        <Image src={`${IMG}/${img}`} alt={alt} fill loading="lazy" sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
      </div>
      {caption && (
        <figcaption
          className={`${mono.className} absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] md:text-[11px] uppercase tracking-[0.14em] font-bold px-3 py-1.5`}
          style={{ backgroundColor: 'rgba(43,20,32,0.85)', color: '#fff' }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.28em] mb-4 flex items-center gap-3 font-bold`}
      style={{ color: light ? C.blush : C.pinkDeep }}
    >
      <span className="inline-block w-8 h-[2px]" style={{ backgroundColor: C.pink }} aria-hidden="true" />
      {children}
    </p>
  )
}

function WaBtn({ href, label, ghost = false }: { href: string; label: string; ghost?: boolean }) {
  return (
    <a
      href={href}
      target={href.startsWith('#') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className={`${display.className} inline-block text-base md:text-lg px-8 py-3 rounded-full transition-all hover:-translate-y-0.5 active:scale-95 tap-44 ${FOCUS}`}
      style={
        ghost
          ? { border: `1.5px solid ${C.plum}`, color: C.plum }
          : { backgroundColor: C.pink, color: '#fff', boxShadow: `0 6px 0 ${C.plum}` }
      }
    >
      {label}
    </a>
  )
}

export default function HairHomeStudioClaudiaPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.cream, color: C.ink }}>
      <style>{`html { scroll-behavior: auto }`}</style>

      <div className="h-0" style={{ backgroundColor: C.cream }}>
        <BlitzNav
          name={
            <span className="flex items-center gap-2.5">
              <Image src={`${IMG}/avatar.webp`} alt="Foto de perfil de Claudia Beltrán" width={32} height={32} className="w-8 h-8 rounded-full object-cover" />
              <span className={`${display.className} italic`}>{BIZ.short}</span>
            </span>
          }
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass=""
          theme={{ over: 'light', bar: 'rgba(251,245,239,0.95)', ink: C.ink, line: C.line, btnBg: C.pink, btnInk: '#fff' }}
        />
      </div>

      {/* ── Hero editorial: serif gigante + arcos de resultados ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-14 md:pb-20">
          <div className="grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-8 items-center">
            <Reveal>
              <Eyebrow>Home studio · Los Andes {''}· Linares</Eyebrow>
              <h1 className={`${display.className} leading-[0.98] text-[clamp(2.9rem,9.5vw,6rem)]`}>
                Pelo liso,
                <br />
                <span className="italic" style={{ color: C.pink }}>
                  pestañas que levantan
                </span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-md mt-6 mb-5" style={{ color: C.muted }}>
                El home studio de Claudia Beltrán en {BIZ.address}, {BIZ.city}.
                Alisados permanentes y lifting de pestañas con hora agendada:
                llegas, te atiende la dueña y sales lista.
              </p>
              <div className="flex items-center gap-3 mb-8">
                <Stars value={5} color={C.pink} />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} text-xs md:text-sm underline underline-offset-4 decoration-2 tap-44`}
                  style={{ color: C.plum, textDecorationColor: C.pink }}
                >
                  {BIZ.rating} · {BIZ.reviews} reseñas en Google
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                <WaBtn href={WA_LINK} label="Agendar hora" />
                <WaBtn href="#trabajos" label="Ver trabajos" ghost />
              </div>
            </Reveal>

            {/* trío de arcos */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 items-end">
              <Reveal delay={80} className="pb-8">
                <Arch img="alisado-rubio.webp" alt="Alisado sobre pelo rubio, visto de espaldas" />
              </Reveal>
              <Reveal delay={160}>
                <Arch img="alisado-1.webp" alt="Alisado permanente sobre pelo oscuro frente al muro fucsia" tall />
              </Reveal>
              <Reveal delay={240} className="pb-12">
                <Arch img="pestanas.webp" alt="Lifting de pestañas en primer plano" />
              </Reveal>
            </div>
          </div>
        </div>
        {/* cinta de datos */}
        <div className="border-y" style={{ borderColor: C.line, backgroundColor: C.blush }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.14em]`} style={{ color: C.plum }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span>Agenda solo por WhatsApp</span>
            <span>{BIZ.instagramUser}</span>
            <span className="hidden md:inline" style={{ color: C.pinkDeep }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Trabajos reales: muro de resultados ── */}
      <section id="trabajos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Trabajos reales</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.0]`}>
              El resultado
              <span className="italic" style={{ color: C.pink }}> se ve en la foto</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: C.muted }}>
              Fotos reales del estudio, publicadas por el propio negocio en
              su ficha de Google: alisados, pestañas y la cabina.
            </p>
          </div>
        </Reveal>
        <ul className="columns-2 md:columns-3 gap-4 md:gap-5 [column-fill:balance]">
          {TRABAJOS.map((t, i) => (
            <li key={t.img} className="mb-4 md:mb-5 break-inside-avoid">
              <Reveal delay={i * 70}>
                <figure className="relative overflow-hidden" style={{ borderRadius: t.wide ? '18px' : '999px 999px 18px 18px', border: `1px solid ${C.line}` }}>
                  <div className={`relative w-full ${t.wide ? 'aspect-[16/10]' : 'aspect-[3/4]'}`}>
                    <Image src={`${IMG}/${t.img}`} alt={t.alt} fill loading="lazy" sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
                  </div>
                  <figcaption
                    className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.14em] font-bold px-4 py-2.5 flex items-center justify-between gap-2`}
                    style={{ backgroundColor: C.card, color: C.plum }}
                  >
                    {t.cap}
                    <span style={{ color: C.pink }} aria-hidden="true">●</span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.plum }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Lo que anuncia Claudia</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.0] mb-12 md:mb-16`} style={{ color: '#fff' }}>
              Alisados y pestañas,
              <br />
              <span className="italic" style={{ color: C.blush }}>con nombre y apellido</span>
            </h2>
          </Reveal>
          <ul className="space-y-8 md:space-y-10">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <li className={`grid md:grid-cols-[280px_1fr] lg:grid-cols-[340px_1fr] items-stretch ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <div className="relative overflow-hidden" style={{ borderRadius: '140px 140px 18px 18px' }}>
                    <div className="relative aspect-[16/10] md:aspect-auto md:h-full md:min-h-[240px]">
                      <Image src={`${IMG}/${s.img}`} alt={s.alt} fill loading="lazy" sizes="(min-width: 1024px) 340px, (min-width: 768px) 280px, 100vw" className="object-cover" />
                    </div>
                    <span className={`${mono.className} absolute top-4 left-4 text-[11px] font-bold px-3 py-1.5 rounded-full`} style={{ backgroundColor: C.pink, color: '#fff' }} aria-hidden="true">
                      {s.n}
                    </span>
                  </div>
                  <div className="p-6 md:p-9" style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '18px' }}>
                    <h3 className={`${display.className} text-2xl md:text-4xl mb-3`} style={{ color: '#fff' }}>
                      {s.name}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed max-w-xl mb-6" style={{ color: 'rgba(255,255,255,0.78)' }}>
                      {s.desc}
                    </p>
                    <a
                      href={WA_LINK_HORA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${mono.className} inline-block text-xs md:text-sm font-bold uppercase tracking-[0.14em] underline underline-offset-4 decoration-2 tap-44`}
                      style={{ color: C.blush, textDecorationColor: C.pink }}
                    >
                      Consultar este servicio →
                    </a>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── El estudio y su dueña ── */}
      <section id="estudio" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="relative overflow-hidden" style={{ borderRadius: '200px 200px 18px 18px', border: `1px solid ${C.line}` }}>
              <div className="relative aspect-[4/4.4]">
                <Image
                  src={`${IMG}/equipo.webp`}
                  alt="Claudia Beltrán y su equipo sosteniendo certificados dentro del estudio"
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <span className={`${mono.className} absolute bottom-0 left-0 right-0 text-center text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-2.5`} style={{ backgroundColor: 'rgba(43,20,32,0.85)', color: C.blush }}>
                negocio de mujer empresaria
              </span>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>El estudio</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02] mb-6`}>
              Un home studio
              <br />
              <span className="italic" style={{ color: C.pink }}>en Los Andes, Linares</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              Hair Home studio funciona en {BIZ.address}: un espacio propio,
              con cabina y aro de luz, donde te atiende siempre la misma
              persona. La ficha de Google lo registra como negocio de mujer
              empresaria.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                `${BIZ.rating} de 5 en Google · ${BIZ.reviews} reseñas`,
                `Trabajos publicados en Instagram ${BIZ.instagramUser}`,
                'Hora agendada = atención de a una, sin esperas',
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.ink }}>
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.pink }} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <a
              href={BIZ.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} text-xs md:text-sm font-bold uppercase tracking-[0.14em] underline underline-offset-4 decoration-2 tap-44`}
              style={{ color: C.plum, textDecorationColor: C.pink }}
            >
              Ver su Instagram {BIZ.instagramUser} →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.blush }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Agenda y ubicación</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02] mb-6`}>
              {BIZ.address},
              <br />
              <span className="italic" style={{ color: C.pinkDeep }}>{BIZ.city}</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}, {BIZ.city}, {BIZ.region}
              <br />
              <a href={WA_LINK} className={`${mono.className} underline underline-offset-4 decoration-2 tap-44`} style={{ color: C.plum, textDecorationColor: C.pink }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              La agenda se toma solo por WhatsApp: escribes, Claudia te
              confirma hora y servicio, y listo.
            </p>
            <div className="flex flex-wrap gap-3">
              <WaBtn href={WA_LINK} label="Agendar por WhatsApp" />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-block text-base md:text-lg px-8 py-3 rounded-full transition-all hover:-translate-y-0.5 tap-44 ${FOCUS}`}
                style={{ border: `1.5px solid ${C.plum}`, color: C.plum }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden min-h-[320px] h-full" style={{ borderRadius: '18px', border: `1px solid ${C.line}`, backgroundColor: C.card }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.plum }}>
        <div className="absolute inset-0 opacity-[0.16]" style={{ backgroundImage: `url(${IMG}/estudio.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} text-[clamp(2.3rem,7vw,4.4rem)] leading-[1.0] mb-8`} style={{ color: '#fff' }}>
              Tu próxima hora queda
              <br />
              <span className="italic" style={{ color: C.blush }}>a un mensaje de distancia</span>
            </h2>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block text-base md:text-lg px-9 py-3 rounded-full transition-all hover:-translate-y-0.5 active:scale-95 tap-44 ${FOCUS}`}
              style={{ backgroundColor: C.pink, color: '#fff', boxShadow: '0 6px 0 rgba(0,0,0,0.35)' }}
            >
              Escribir a Claudia
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: '#fff' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center gap-4">
          <Image src={`${IMG}/avatar.webp`} alt="Foto de perfil de Claudia Beltrán" width={36} height={36} className="w-9 h-9 rounded-full object-cover" />
          <div>
            <p className={`${display.className} italic text-lg`}>{BIZ.name}</p>
            <address className={`${mono.className} not-italic text-[11px]`} style={{ color: 'rgba(255,255,255,0.5)' }}>
              {BIZ.address} · {BIZ.city} · {BIZ.instagramUser}
            </address>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.blush }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Fotos y datos tomados de su ficha de Google Maps y su Instagram público.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.blush }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
