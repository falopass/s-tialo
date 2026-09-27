import type { Metadata } from 'next'
import Image from 'next/image'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { Vitrina, C } from './vitrina'
import { BIZ, WA_LINK, IG_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = DM_Serif_Display({ subsets: ['latin'], weight: ['400'] })
const body = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Comercial Río Claro — Artículos para la higiene por mayor en Talca',
  description:
    'Mayorista de artículos para la higiene en Av. Ignacio Carrera Pinto 088, Talca. Limpieza, menaje y descartables para casas y negocios. Cotiza por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'Precios', href: '#precios' },
  { label: 'El local', href: '#el-local' },
  { label: 'Contacto', href: '#contacto' },
]

const PRICE_LIST = [
  { name: 'Escobillón y escoba de paja', price: 'desde $3.500', unit: 'por unidad' },
  { name: 'Balde plástico reforzado', price: 'desde $2.900', unit: 'por unidad' },
  { name: 'Bidón de cloro 5 L', price: 'desde $6.500', unit: 'por bidón' },
  { name: 'Papel higiénico industrial', price: 'desde $11.900', unit: 'pack ×6' },
  { name: 'Guantes descartables', price: 'desde $8.400', unit: 'caja ×100' },
  { name: 'Olla de peltre esmaltado', price: 'desde $7.900', unit: 'por pieza' },
]

const TESTIMONIALS = [
  'Siempre tienen lo que necesito para el almacén y el precio por mayor es de verdad conveniente.',
  'Atienden ellos mismos y te ayudan a cargar. A la antigua, como corresponde.',
  'Compro los descartables del negocio acá hace tiempo. Precioso local y buen trato.',
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-semibold"
      style={{ color: light ? C.brassSoft : C.brassInk }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function ComercialRioClaroPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.crema, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(246,241,231,0.94)',
          ink: C.forest,
          line: C.line,
          btnBg: C.forest,
          btnInk: C.crema,
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior de Comercial Río Claro: repisas llenas de baldes, escobas y artículos de limpieza, con el mesón al fondo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(19,35,24,0.55) 0%, rgba(19,35,24,0.35) 35%, rgba(19,35,24,0.88) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg"
              style={{ backgroundColor: 'rgba(246,241,231,0.94)', color: C.forest }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke={C.brass} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Artículos para la higiene · Talca · al por mayor y detalle</Eyebrow>
            <h1
              className={`${display.className} leading-[1.0] text-[clamp(2.9rem,10.5vw,6.2rem)] mb-6`}
              style={{ color: C.crema }}
            >
              El almacén de la
              <br />
              <em className="not-italic" style={{ color: C.brassSoft }}>limpieza de Talca</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(246,241,231,0.88)' }}>
              Escobas, baldes, menaje y todo el aseo para casas, almacenes
              y cocinerías del Maule. Precio mayorista con la atención de
              siempre, en Carrera Pinto.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2`}
                style={{ backgroundColor: C.brass, color: C.deep }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#vitrina"
                className={`${display.className} text-sm md:text-base px-7 py-3.5 rounded-full border transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(246,241,231,0.55)', color: C.crema }}
              >
                Ver la vitrina
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(246,241,231,0.22)', backgroundColor: 'rgba(19,35,24,0.45)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(246,241,231,0.78)' }}>
            <span>Carrera Pinto 088</span>
            <span>Mayor y detalle</span>
            <span>Despacho en Talca</span>
            <span className="hidden md:inline" style={{ color: C.brassSoft }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── La vitrina ── */}
      <section id="vitrina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>La vitrina</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-12">
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.forest }}>
              Lo que hay
              <br />
              en la repisa
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Una muestra del surtido: al publicar van los productos y
              precios reales del negocio. Estos valores son de ejemplo.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <Vitrina fontClass={display.className} />
        </Reveal>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20 border-t" style={{ borderColor: C.line, backgroundColor: '#EFE8D8' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Lista de precios</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.forest }}>
                Precios de referencia
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Lista de muestra para ilustrar el sitio. Los valores y el
                stock se confirman por WhatsApp.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div
              className="rounded-2xl border overflow-hidden"
              style={{ borderColor: C.line, backgroundColor: C.card }}
            >
              {PRICE_LIST.map((p, i) => (
                <div
                  key={p.name}
                  className="flex items-baseline justify-between gap-4 px-5 md:px-7 py-4 border-b last:border-b-0"
                  style={{ borderColor: C.line, backgroundColor: i % 2 ? 'transparent' : 'rgba(30,61,47,0.03)' }}
                >
                  <div className="flex items-baseline gap-4 min-w-0">
                    <span className={`${display.className} text-sm w-6 shrink-0`} style={{ color: C.brassInk }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm md:text-base" style={{ color: C.ink }}>{p.name}</p>
                      <p className="text-[11px] uppercase tracking-[0.14em]" style={{ color: C.muted }}>{p.unit}</p>
                    </div>
                  </div>
                  <p className={`${display.className} text-lg md:text-2xl shrink-0`} style={{ color: C.forest }}>
                    {p.price}
                  </p>
                </div>
              ))}
              <p className="px-5 md:px-7 py-4 text-xs leading-relaxed" style={{ color: C.muted, backgroundColor: 'rgba(200,162,75,0.10)' }}>
                Precios de muestra para el ejemplo. En el sitio real van la
                lista y las condiciones de mayorista del negocio.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El local ── */}
      <section id="el-local" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]" style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.35)' }}>
              <Image
                src={`${IMG}/ambiente.webp`}
                alt="Fachada de Comercial Río Claro en Carrera Pinto: cortina levantada, escobas y baldes asomando a la calle"
                fill
                loading="eager"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow light>El negocio</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.crema }}>
              Una casa comercial
              <br />
              <em className="not-italic" style={{ color: C.brassSoft }}>de las de antes</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: 'rgba(246,241,231,0.75)' }}>
              En Av. Ignacio Carrera Pinto, Comercial Río Claro abastece a
              almacenes, cocinerías y familias de Talca con artículos de
              higiene y menaje. Se atiende directo, se conversa el precio
              por mayor y se conoce al cliente por su nombre.
            </p>
            <ul className="space-y-3 mb-9">
              {[
                `Venta por mayor y detalle, en local y por WhatsApp`,
                `Atención directa en ${BIZ.address}, ${BIZ.city}`,
                `${BIZ.instagramFollowers} seguidores en Instagram`,
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base" style={{ color: 'rgba(246,241,231,0.88)' }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: C.brass }} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block text-sm md:text-base px-7 py-3.5 rounded-full border transition-colors hover:bg-white/10`}
              style={{ borderColor: 'rgba(246,241,231,0.45)', color: C.crema }}
            >
              @{BIZ.instagram} en Instagram
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Lo que valoran los clientes ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Opiniones</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.forest }}>
              El trato que se nota
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
              Comercial Río Claro registra {BIZ.reviews} reseñas en su
              ficha de Google. Estos textos son de muestra: al publicar
              van las reseñas reales.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline underline-offset-4 decoration-2"
              style={{ color: C.brassInk, textDecorationColor: 'rgba(122,94,30,0.35)' }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
          <div className="space-y-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={120 + i * 110}>
                <figure
                  className="rounded-2xl p-6 md:p-7 border"
                  style={{ backgroundColor: C.card, borderColor: C.line }}
                >
                  <blockquote className={`${display.className} text-base md:text-lg leading-relaxed mb-4`} style={{ color: C.ink }}>
                    “{t}”
                  </blockquote>
                  <figcaption className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: C.brassInk }}>
                    Reseña de ejemplo
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto y ubicación ── */}
      <section id="contacto" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
        <Reveal>
          <Eyebrow>Contacto</Eyebrow>
          <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.forest }}>
            Carrera Pinto 088,
            <br />
            Talca
          </h2>
          <address className="not-italic text-sm md:text-base leading-relaxed mb-7" style={{ color: C.muted }}>
            {BIZ.address}
            <br />
            {BIZ.city}, {BIZ.region}, Chile
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">{BIZ.phoneDisplay}</a>
          </address>
          <p className="text-sm md:text-base leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
            Escríbenos por WhatsApp con lo que necesitas — producto,
            cantidad y si es para casa o negocio — y te confirmamos precio
            y stock al tiro.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2`}
              style={{ backgroundColor: C.forest, color: C.crema }}
            >
              Cotizar por WhatsApp →
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} text-sm px-6 py-3 rounded-full border transition-colors hover:bg-[rgba(30,61,47,0.07)] focus-visible:outline-2 focus-visible:outline-offset-2`}
              style={{ borderColor: 'rgba(30,61,47,0.4)', color: C.forest }}
            >
              Cómo llegar
            </a>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <div className="rounded-2xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.card }}>
            <iframe
              title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
              src={MAPS_EMBED}
              className="w-full h-full min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.forest }}>
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `url(${IMG}/hero.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.05] mb-6`} style={{ color: C.crema }}>
              Cotiza tu pedido,
              <br />
              <em className="not-italic" style={{ color: C.brassSoft }}>mayor o detalle</em>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(246,241,231,0.78)' }}>
              Mándanos la lista por WhatsApp y te respondemos con precio y
              stock el mismo día. Retiras en el local o coordinamos despacho.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block text-sm md:text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2`}
              style={{ backgroundColor: C.brass, color: C.deep }}
            >
              Escribir por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className={`${display.className} text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(246,241,231,0.8)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">{BIZ.phoneDisplay}</a>
              {' · '}
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                @{BIZ.instagram}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(246,241,231,0.8)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,241,231,0.14)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-5 pb-20 flex flex-col gap-3">
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(246,241,231,0.75)' }}>
              Textos, productos, precios y fotos son de muestra.
            </p>
            <div className="[&>div]:static! [&>div]:max-w-none! [&>div]:inline-flex!">
              <DemoBand name={BIZ.name} />
            </div>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
