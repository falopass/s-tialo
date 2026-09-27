import type { Metadata } from 'next'
import Image from 'next/image'
import { Bitter, Rubik } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_TORTA, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Bitter({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})
const body = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const C = {
  slate: '#2F4858',
  slateDeep: '#22353F',
  slateInk: '#1B2933',
  yellow: '#F2B705',
  yellowSoft: '#FBE3A2',
  white: '#FFFFFF',
  soft: '#F1F4F7',
  muted: '#6B7885',
  line: 'rgba(47,72,88,0.16)',
  lineLight: 'rgba(255,255,255,0.22)',
}

export const metadata: Metadata = {
  title: 'Le Petit Pasteleria — Pastelería artesanal en Talca',
  description:
    'Pastelería en 2 Oriente 1133, Talca. Tortas por encargo, tarteletas de fruta, milhojas, alfajores y dulces para llevar.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'La casa', href: '#casa' },
  { label: 'Precios', href: '#precios' },
  { label: 'Encargos', href: '#contacto' },
]

const VITRINA = [
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Tarteletas de fruta fresca con crema, recién armadas en la vitrina',
    num: 'a',
    name: 'Tarteletas de fruta',
    desc: 'Masa quebrada, crema y fruta fresca de temporada: berries, durazno y lo que dé la semana.',
    note: 'Las favoritas de la vitrina',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Alfajores, milhojas y dulces clásicos de vitrina listos para llevar',
    num: 'b',
    name: 'Clásicos de vitrina',
    desc: 'Alfajores, milhojas, trozos de torta y dulces para llevar, listos para la once.',
    note: 'Para llevar o para quedarse',
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Torta de celebración por encargo con crema y fruta fresca',
    num: 'c',
    name: 'Tortas por encargo',
    desc: 'Milhojas, crema y manjar, o el sabor que tú pidas. Se encargan con anticipación por WhatsApp.',
    note: 'Cumpleaños y celebraciones',
  },
  {
    src: `${IMG}/hero.webp`,
    alt: 'Mostrador de Le Petit Pasteleria con merengues, pan de la casa y el dulce del día',
    num: 'd',
    name: 'La vitrina completa',
    desc: 'Merengues, pan de la casa y el dulce del día. El mostrador se renueva cada mañana.',
    note: 'Recién horneado',
  },
]

const PRECIOS = [
  { name: 'Tarteleta de fruta (unidad)', price: 'desde $2.500' },
  { name: 'Alfajor artesanal', price: 'desde $1.800' },
  { name: 'Trozo de torta de vitrina', price: 'desde $3.200' },
  { name: 'Caja de dulces surtidos ×12', price: 'desde $12.000' },
  { name: 'Torta de cumpleaños (15–20 personas)', price: 'desde $25.000' },
  { name: 'Mesa dulce para evento', price: 'a cotizar' },
]

const TESTIMONIALS = [
  {
    text: 'Encargué la torta del cumpleaños de mi mamá y quedó preciosa, con la fruta fresquita encima.',
    author: 'Clienta del centro',
  },
  {
    text: 'Las tarteletas se agotan rápido, hay que llegar temprano. Atención muy amable.',
    author: 'Vecino de 2 Oriente',
  },
]

function SectionNum({ n, label, light = false }: { n: string; label: string; light?: boolean }) {
  return (
    <div className="flex items-baseline gap-4 mb-6">
      <span
        className={`${display.className} font-black leading-none text-[clamp(2.4rem,6vw,4rem)]`}
        style={{ color: C.yellow }}
      >
        {n}
      </span>
      <span
        className="text-[11px] uppercase tracking-[0.26em] font-semibold pb-1 border-b-2"
        style={{ color: light ? 'rgba(255,255,255,0.75)' : C.muted, borderColor: C.yellow }}
      >
        {label}
      </span>
    </div>
  )
}

export default function LePetitPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.white, color: C.slateInk }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(255,255,255,0.94)',
          ink: C.slateDeep,
          line: C.line,
          btnBg: C.yellow,
          btnInk: C.slateInk,
        }}
      />

      {/* ── Portada: hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col overflow-hidden" style={{ backgroundColor: C.slateDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Vitrina iluminada de Le Petit Pasteleria con tortas, merengues y dulces"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(27,41,51,0.55) 0%, rgba(27,41,51,0.18) 42%, rgba(27,41,51,0.86) 100%)',
          }}
        />
        {/* masthead de revista */}
        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pt-24 md:pt-28">
          <Reveal>
            <div
              className="flex flex-wrap items-baseline justify-between gap-3 border-y-2 py-3 text-[11px] md:text-xs uppercase tracking-[0.22em] font-semibold"
              style={{ borderColor: 'rgba(255,255,255,0.55)', color: 'rgba(255,255,255,0.9)' }}
            >
              <span>Pastelería · Talca</span>
              <span className="hidden md:inline">Edición N° 01 · Sitio de muestra</span>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 underline underline-offset-4 decoration-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B705]"
                style={{ textDecorationColor: C.yellow }}
              >
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]" fill={C.yellow} stroke={C.yellow} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
                </svg>
                {BIZ.reviews} reseñas en Google
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative flex-1 flex items-end">
          <div className="max-w-6xl mx-auto w-full px-5 md:px-8 pb-12 md:pb-16">
            <Reveal delay={120}>
              <h1
                className={`${display.className} font-black leading-[0.98] tracking-[-0.015em] text-[clamp(3rem,9vw,7.5rem)] mb-6`}
                style={{ color: C.white }}
              >
                Dulces chicos,
                <br />
                <em className="font-bold" style={{ color: C.yellow }}>oficio grande</em>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(255,255,255,0.88)' }}>
                Pastelería artesanal en 2 Oriente 1133, Talca: tarteletas de
                fruta, milhojas, alfajores y tortas hechas a pedido.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B705]`}
                  style={{ backgroundColor: C.yellow, color: C.slateInk }}
                >
                  Encargar por WhatsApp
                </a>
                <a
                  href="#vitrina"
                  className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B705]`}
                  style={{ borderColor: 'rgba(255,255,255,0.6)', color: C.white }}
                >
                  Ver la vitrina
                </a>
              </div>
            </Reveal>
          </div>
        </div>
        {/* colofón al pie de la portada */}
        <div className="relative border-t" style={{ borderColor: C.lineLight, backgroundColor: 'rgba(27,41,51,0.55)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(255,255,255,0.78)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <a href={BIZ.instagramUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B705]" style={{ textDecorationColor: C.yellow }}>
              {BIZ.instagram}
            </a>
            <span className="hidden md:inline">Atención directa por WhatsApp</span>
            <span className="hidden md:inline" style={{ color: C.yellowSoft }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── 01 · La vitrina ── */}
      <section id="vitrina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <SectionNum n="01" label="La vitrina" />
          <div className="grid lg:grid-cols-12 gap-6 md:gap-10 items-end mb-12 md:mb-16">
            <h2
              className={`${display.className} lg:col-span-7 font-black leading-[1.0] text-[clamp(2.4rem,6.5vw,5rem)]`}
              style={{ color: C.slate }}
            >
              Lo que sale
              <br />
              del obrador
            </h2>
            <p className="lg:col-span-5 text-sm md:text-base leading-relaxed max-w-md lg:justify-self-end" style={{ color: C.muted }}>
              Esto es una muestra de la vitrina: al publicar van los
              productos y precios reales de la pastelería.
            </p>
          </div>
        </Reveal>
        {/* grilla asimétrica de 12 columnas */}
        <ul className="grid lg:grid-cols-12 gap-x-6 md:gap-x-10 gap-y-12 md:gap-y-16">
          {VITRINA.map((p, i) => {
            const spans = [
              'lg:col-span-7',
              'lg:col-span-5 lg:mt-20',
              'lg:col-span-5 lg:-mt-10',
              'lg:col-span-7',
            ]
            const aspects = ['aspect-[16/10]', 'aspect-[4/3]', 'aspect-[4/3]', 'aspect-[16/10]']
            return (
              <Reveal key={p.name} delay={i * 80} className={spans[i]}>
                <li className="group">
                  <figure className={`relative overflow-hidden ${aspects[i]}`}>
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <span
                      className={`${display.className} absolute top-4 left-4 text-sm font-black italic px-3 py-1`}
                      style={{ backgroundColor: C.yellow, color: C.slateInk }}
                    >
                      {p.num}.
                    </span>
                  </figure>
                  <div className="pt-5 border-t-2 mt-5" style={{ borderColor: C.slate }}>
                    <p className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-2" style={{ color: C.muted }}>
                      {p.note}
                    </p>
                    <h3 className={`${display.className} font-extrabold text-2xl md:text-3xl leading-tight mb-2`} style={{ color: C.slate }}>
                      {p.name}
                    </h3>
                    <p className="text-sm md:text-[15px] leading-relaxed max-w-md" style={{ color: C.muted }}>
                      {p.desc}
                    </p>
                  </div>
                </li>
              </Reveal>
            )
          })}
        </ul>
      </section>

      {/* ── Foto que rompe la grilla: la casa ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.slateDeep }}>
        <div className="relative h-[52vh] md:h-[72vh]">
          <Image
            src={`${IMG}/ambiente.webp`}
            alt="Fachada de Le Petit Pasteleria en 2 Oriente, Talca, con la vitrina a la calle"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-x-0 bottom-0"
          style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(27,41,51,0.85) 100%)' }}
        >
          <div className="max-w-6xl mx-auto px-5 md:px-8 pb-8 md:pb-10 pt-24">
            <p className={`${display.className} font-black text-2xl md:text-4xl leading-tight`} style={{ color: C.white }}>
              La vitrina da a la calle,
              <em className="font-bold" style={{ color: C.yellow }}> como toda la vida</em>
            </p>
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] mt-3" style={{ color: 'rgba(255,255,255,0.75)' }}>
              2 Oriente 1133 · Talca · Región del Maule
            </p>
          </div>
        </div>
      </section>

      {/* ── 02 · La casa ── */}
      <section id="casa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <SectionNum n="02" label="La casa" />
        </Reveal>
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className={`${display.className} font-black leading-[1.02] text-[clamp(2rem,4.5vw,3.4rem)] mb-6`} style={{ color: C.slate }}>
                Una pastelería
                <br />
                de barrio, con
                <br />
                <em className="font-bold" style={{ color: C.yellow }}>nombre propio</em>
              </h2>
              <dl className="grid grid-cols-2 gap-5 border-t-2 pt-6" style={{ borderColor: C.slate }}>
                <div>
                  <dt className={`${display.className} font-black text-3xl md:text-4xl`} style={{ color: C.slate }}>{BIZ.reviews}</dt>
                  <dd className="text-xs md:text-sm" style={{ color: C.muted }}>reseñas en Google</dd>
                </div>
                <div>
                  <dt className={`${display.className} font-black text-3xl md:text-4xl`} style={{ color: C.slate }}>{BIZ.followers}</dt>
                  <dd className="text-xs md:text-sm" style={{ color: C.muted }}>seguidores en Instagram</dd>
                </div>
              </dl>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="md:columns-2 md:gap-10 md:[column-rule:1px_solid_rgba(47,72,88,0.16)] space-y-4 text-sm md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                <p>
                  <strong className="font-semibold" style={{ color: C.slate }}>
                    <span
                      className={`${display.className} float-left font-black leading-[0.78] text-[3.6rem] mr-2.5 mt-1`}
                      style={{ color: C.slate }}
                    >
                      L
                    </span>
                    e Petit Pasteleria
                  </strong>{' '}
                  atiende en 2 Oriente 1133, a pasos del centro de Talca. Es
                  de esas vitrinas chicas donde todo se ve de cerca: las
                  tarteletas recién armadas, los alfajores apilados y las
                  tortas que esperan a su dueño.
                </p>
                <p>
                  Aquí la atención es directa: quien te atiende es quien
                  hornea. Por eso los encargos se conversan por WhatsApp, con
                  calma, hasta que la torta queda como la imaginaste.
                </p>
                <p>
                  Lo que más valoran los clientes — según sus reseñas en
                  Google — es la cercanía: preguntas, te responden; encargas,
                  te cumplen. Simple y de confianza.
                </p>
              </div>
              <blockquote
                className={`${display.className} mt-8 border-l-4 pl-5 font-bold italic text-xl md:text-2xl leading-snug`}
                style={{ borderColor: C.yellow, color: C.slate }}
              >
                “El dulce chico también celebra: un alfajor bien hecho
                arregla una tarde.”
              </blockquote>
            </Reveal>
            <div className="mt-10 space-y-5">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={i} delay={140 + i * 100}>
                  <figure className="border p-5 md:p-6" style={{ borderColor: C.line, backgroundColor: C.soft }}>
                    <blockquote className={`${display.className} text-base md:text-lg leading-relaxed mb-3`} style={{ color: C.slate }}>
                      “{t.text}”
                    </blockquote>
                    <figcaption className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: C.muted }}>
                      {t.author} · Reseña de ejemplo
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
              <Reveal delay={240}>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-bold underline underline-offset-4 decoration-2 transition-colors hover:text-[#22353F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F4858]"
                  style={{ color: C.slate, textDecorationColor: C.yellow }}
                >
                  Leer las {BIZ.reviews} reseñas reales en Google →
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 · Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20" style={{ backgroundColor: C.slate }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionNum n="03" label="Precios de referencia" light />
            <div className="grid lg:grid-cols-12 gap-6 md:gap-10 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} lg:col-span-7 font-black leading-[1.0] text-[clamp(2.2rem,5.5vw,4.2rem)]`} style={{ color: C.white }}>
                La carta,
                <em className="font-bold" style={{ color: C.yellow }}> sin letra chica</em>
              </h2>
              <p className="lg:col-span-5 text-sm md:text-base leading-relaxed max-w-md lg:justify-self-end" style={{ color: 'rgba(255,255,255,0.72)' }}>
                Valores de muestra: al publicar van los precios reales de
                la pastelería, siempre informados antes de encargar.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ul className="border-t" style={{ borderColor: C.lineLight }}>
              {PRECIOS.map((p) => (
                <li
                  key={p.name}
                  className="flex items-baseline justify-between gap-4 py-4 md:py-5 border-b"
                  style={{ borderColor: C.lineLight }}
                >
                  <span className={`${display.className} font-bold text-base leading-snug md:text-2xl`} style={{ color: C.white }}>
                    {p.name}
                  </span>
                  <span className="flex-1 border-b border-dotted mx-2 translate-y-[-4px] min-w-[24px]" style={{ borderColor: 'rgba(255,255,255,0.3)' }} aria-hidden="true" />
                  <span className={`${display.className} font-black text-base md:text-2xl whitespace-nowrap`} style={{ color: C.yellow }}>
                    {p.price}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-4">
              <a
                href={WA_LINK_TORTA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B705]`}
                style={{ backgroundColor: C.yellow, color: C.slateInk }}
              >
                Encargar una torta
              </a>
              <p className="text-xs md:text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Los encargos se confirman por WhatsApp con anticipación.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 04 · Encargos y dónde estamos ── */}
      <section id="contacto" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <SectionNum n="04" label="Encargos y contacto" />
        </Reveal>
        <div className="grid lg:grid-cols-12 gap-10 md:gap-12 items-stretch">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className={`${display.className} font-black leading-[1.02] text-[clamp(2rem,4.5vw,3.2rem)] mb-6`} style={{ color: C.slate }}>
                2 Oriente 1133,
                <br />
                <em className="font-bold" style={{ color: C.yellow }}>Talca</em>
              </h2>
              <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}, Chile
              </address>
              <ul className="space-y-3 mb-8 text-sm md:text-base" style={{ color: C.muted }}>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.yellow }} aria-hidden="true" />
                  <span><strong className="font-semibold" style={{ color: C.slate }}>WhatsApp:</strong> {BIZ.phoneDisplay}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.yellow }} aria-hidden="true" />
                  <span>
                    <strong className="font-semibold" style={{ color: C.slate }}>Instagram:</strong>{' '}
                    <a href={BIZ.instagramUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-2 transition-colors hover:text-[#22353F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F4858]" style={{ textDecorationColor: C.yellow }}>
                      {BIZ.instagram}
                    </a>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.yellow }} aria-hidden="true" />
                  <span><strong className="font-semibold" style={{ color: C.slate }}>Horario:</strong> referencial, se confirma por WhatsApp</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F4858]`}
                  style={{ backgroundColor: C.slate, color: C.white }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-[rgba(47,72,88,0.07)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F4858]`}
                  style={{ borderColor: C.slate, color: C.slate }}
                >
                  Cómo llegar →
                </a>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={140} className="h-full">
              <div className="overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.soft }}>
                <iframe
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-full min-h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cierre editorial ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.slateDeep }}>
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `url(${IMG}/detalle3.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.26em] font-semibold mb-5" style={{ color: C.yellow }}>
              Última página
            </p>
            <h2 className={`${display.className} font-black text-[clamp(2.4rem,7vw,5rem)] leading-[1.0] mb-7 max-w-3xl`} style={{ color: C.white }}>
              El próximo dulce
              <br />
              <em className="font-bold" style={{ color: C.yellow }}>puede ser tuyo</em>
            </h2>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold text-sm md:text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B705]`}
              style={{ backgroundColor: C.yellow, color: C.slateInk }}
            >
              Hacer un pedido por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.slateInk, color: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className={`${display.className} font-black text-2xl mb-2`}>
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B705]">
                {l.label}
              </a>
            ))}
            <a href={BIZ.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B705]">
              Instagram
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Textos,
            productos, precios, horarios y fotos son de muestra.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
