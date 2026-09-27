import type { Metadata } from 'next'
import Image from 'next/image'
import { Playfair_Display, Lato } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_TORTA, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})
const body = Lato({ subsets: ['latin'], weight: ['400', '700'] })

const C = {
  paper: '#F7F9F9',
  soft: '#E9F1EF',
  mint: '#9FD8CB',
  mintDeep: '#2F7A6A',
  petrol: '#0E4C5C',
  deep: '#093540',
  ink: '#242B2E',
  muted: '#55666C',
  line: 'rgba(36,43,46,0.18)',
  lineLight: 'rgba(247,249,249,0.26)',
}

export const metadata: Metadata = {
  title: 'Patagonia dulce pastelería — Pastelería en San Clemente',
  description:
    'Pastelería en Campanario 1502, San Clemente, Región del Maule. Tortas por encargo, kuchen y dulces sureños. Pide por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'La casa', href: '#la-casa' },
  { label: 'Precios', href: '#precios' },
  { label: 'Pedidos', href: '#pedidos' },
]

const VITRINA = [
  {
    n: '01.1',
    src: `${IMG}/detalle2.webp`,
    alt: 'Vitrina de pastelería con pie de limón, torta de chocolate, kuchen de berries y alfajores',
    caption: 'La vitrina del mediodía. Foto de muestra.',
    name: 'La vitrina del día',
    desc: 'Pie de limón, milhojas, kuchen de frutas y alfajores recién hechos. La vitrina cambia cada mañana según lo que sale del horno.',
    fig: 'lg:col-span-7',
    txt: 'lg:col-span-4 lg:col-start-9',
    aspect: 'aspect-[4/3]',
  },
  {
    n: '01.2',
    src: `${IMG}/detalle1.webp`,
    alt: 'Torta de capas con crema, manjar, frambuesas y nueces sobre un stand de cerámica',
    caption: 'Torta frambuesa-nuez con manjar. Foto de muestra.',
    name: 'Tortas por encargo',
    desc: 'Cumpleaños, bautizos y matrimonios: se encargan con anticipación por WhatsApp y se retiran en la tienda. Bizcocho, relleno y cubierta a elección.',
    fig: 'lg:col-span-6 lg:col-start-7 lg:order-2',
    txt: 'lg:col-span-4 lg:col-start-1 lg:order-1',
    aspect: 'aspect-[4/3]',
  },
  {
    n: '01.3',
    src: `${IMG}/detalle3.webp`,
    alt: 'Kuchen de durazno con crumble sobre una rejilla de enfriado, con una porción cortada',
    caption: 'Kuchen de durazno recién salido del horno. Foto de muestra.',
    name: 'Kuchen y dulces sureños',
    desc: 'La tradición del sur en porción o entera: kuchen de la temporada, strudel y dulces de hoja para la once.',
    fig: 'lg:col-span-5 lg:col-start-2',
    txt: 'lg:col-span-4 lg:col-start-8 lg:self-end',
    aspect: 'aspect-[5/4]',
  },
]

const PRECIOS = [
  { name: 'Porción de kuchen del día', price: '$3.500' },
  { name: 'Pie de limón entero', price: '$18.000' },
  { name: 'Torta por encargo (15–20 personas)', price: 'desde $32.000' },
  { name: 'Alfajor de maicena', price: '$1.200' },
  { name: 'Caja de dulces surtidos (12 un.)', price: '$15.000' },
  { name: 'Milhojas con manjar (porción)', price: '$3.800' },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '10:00 – 19:00' },
  { days: 'Sábado', time: '10:00 – 14:00' },
]

const KICKER = 'text-[11px] uppercase tracking-[0.26em] font-bold'
const H2 = `${display.className} font-medium leading-[0.98] tracking-[-0.02em]`
const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4'

/** Folio de revista: número a la izquierda, sección a la derecha, regla fina. */
function Folio({ n, kicker, light = false }: { n: string; kicker: string; light?: boolean }) {
  return (
    <div
      className="flex items-baseline justify-between gap-6 border-t pt-4"
      style={{ borderColor: light ? C.lineLight : C.ink, color: light ? 'rgba(247,249,249,0.85)' : C.muted }}
    >
      <span className={KICKER}>N.º {n}</span>
      <span className={`${KICKER} text-right`}>{kicker}</span>
    </div>
  )
}

export default function PatagoniaDulcePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(247,249,249,0.95)',
          ink: C.petrol,
          line: C.line,
          btnBg: C.petrol,
          btnInk: C.paper,
        }}
      />

      {/* ── Portada a sangre ── */}
      <header id="inicio" className="relative min-h-svh flex flex-col overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Cocina de pastelería luminosa: una torta de frutas frescas sobre un mesón de acero, con el pueblo y los cerros por la ventana"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(9,53,64,0.6) 0%, rgba(9,53,64,0.4) 35%, rgba(9,53,64,0.5) 60%, rgba(9,53,64,0.9) 100%)',
          }}
          aria-hidden="true"
        />

        {/* masthead de revista */}
        <div className="relative pt-24 md:pt-28">
          <p
            className="mx-5 md:mx-8 pb-3 border-b flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 text-[11px] uppercase tracking-[0.26em] font-bold"
            style={{ color: 'rgba(247,249,249,0.9)', borderColor: C.lineLight }}
          >
            <span>Edición pastelería de barrio</span>
            <span className="hidden sm:inline">{BIZ.city} · {BIZ.region}</span>
            <span>Foto de muestra</span>
          </p>
          <h1
            className={`${display.className} mx-5 md:mx-8 mt-6 md:mt-10 font-medium leading-[0.95] tracking-[-0.03em] text-[clamp(3.2rem,9vw,8.75rem)]`}
            style={{ color: C.paper }}
          >
            <span className="block">Patagonia</span>
            <span className="block pl-[9%]">dulce</span>
            <span className="block pl-[22%]">
              <em className="font-normal" style={{ color: C.mint }}>pastelería</em>
            </span>
          </h1>
        </div>

        {/* bajada */}
        <div className="relative mt-auto">
          <div className="max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-16 flex flex-wrap items-end justify-between gap-8">
            <Reveal>
              <p className="max-w-md text-base md:text-lg leading-relaxed mb-8" style={{ color: 'rgba(247,249,249,0.9)' }}>
                Tortas por encargo, kuchen del día y dulces sureños en
                {' '}{BIZ.address}, {BIZ.city}. Se encarga por WhatsApp y
                se retira en la tienda.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${FOCUS} inline-flex items-center min-h-12 px-7 text-sm md:text-base font-bold transition-colors hover:bg-[#F7F9F9]`}
                  style={{ backgroundColor: C.mint, color: C.deep }}
                >
                  Hacer un pedido por WhatsApp
                </a>
                <a
                  href="#vitrina"
                  className={`${FOCUS} inline-flex items-center min-h-12 px-7 text-sm md:text-base font-bold border transition-colors hover:bg-white/10`}
                  style={{ borderColor: 'rgba(247,249,249,0.6)', color: C.paper }}
                >
                  Ver la vitrina
                </a>
              </div>
            </Reveal>
            <dl className="flex gap-8 md:gap-10 text-right">
              <div>
                <dt className={`${KICKER} mb-1`} style={{ color: C.mint }}>Instagram</dt>
                <dd className={`${display.className} text-3xl md:text-4xl`} style={{ color: C.paper }}>
                  <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={`${FOCUS} transition-colors hover:text-[#9FD8CB]`}>
                    {BIZ.followers}
                  </a>
                </dd>
              </div>
              <div>
                <dt className={`${KICKER} mb-1`} style={{ color: C.mint }}>La tienda</dt>
                <dd className={`${display.className} text-3xl md:text-4xl`} style={{ color: C.paper }}>
                  {BIZ.city}
                </dd>
              </div>
            </dl>
          </div>
          <div
            className="border-t text-[10px] md:text-[11px] uppercase tracking-[0.2em]"
            style={{ borderColor: C.lineLight, color: 'rgba(247,249,249,0.85)', backgroundColor: 'rgba(9,53,64,0.7)', backdropFilter: 'blur(6px)' }}
          >
            <div className="max-w-6xl mx-auto px-5 md:px-8 pt-3.5 pb-20 flex flex-wrap gap-x-8 gap-y-1">
              <span>{BIZ.address}</span>
              <span>Pedidos por WhatsApp</span>
              <span className="hidden md:inline">Retiro en tienda</span>
              <span className="ml-auto" style={{ color: C.mint }}>sitio de ejemplo</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── 01 · La vitrina ── */}
      <section id="vitrina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-20 md:pb-28">
        <Reveal>
          <Folio n="01" kicker="La vitrina" />
          <div className="mt-8 md:mt-10 grid lg:grid-cols-12 gap-6 items-end">
            <h2 className={`${H2} lg:col-span-8 text-[clamp(2.6rem,6.5vw,5.75rem)]`} style={{ color: C.petrol }}>
              Lo que sale
              <br />
              <em className="font-normal">del horno</em>
            </h2>
            <p className="lg:col-span-4 text-base leading-relaxed max-w-[46ch] lg:pb-3" style={{ color: C.muted }}>
              Una muestra de lo que se puede encontrar y encargar. Al
              publicar van los productos y descripciones reales de la
              pastelería.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 md:mt-20 space-y-16 lg:space-y-24">
          {VITRINA.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <article className="grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-x-10">
                <figure className={s.fig}>
                  <div className={`relative overflow-hidden ${s.aspect}`}>
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="(min-width:1024px) 58vw, 100vw"
                      loading="eager"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="pt-3 text-xs" style={{ color: C.muted }}>
                    {s.caption}
                  </figcaption>
                </figure>
                <div className={s.txt}>
                  <p className={`${display.className} italic text-2xl leading-none`} style={{ color: C.mintDeep }}>
                    {s.n}
                  </p>
                  <h3 className={`${display.className} text-3xl md:text-4xl leading-tight mt-3 mb-4`} style={{ color: C.petrol }}>
                    {s.name}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Foto que rompe la grilla ── */}
      <Reveal>
        <figure className="relative">
          <div className="relative aspect-[16/9] md:aspect-[21/8] overflow-hidden">
            <Image
              src={`${IMG}/ambiente.webp`}
              alt="Fachada de la pastelería al atardecer: vitrina encendida con tortas y kuchen, y la cordillera al fondo"
              fill
              sizes="100vw"
              loading="eager"
              className="object-cover"
            />
          </div>
          <figcaption
            className="absolute bottom-0 right-0 px-5 py-3 text-[11px] uppercase tracking-[0.2em] font-bold"
            style={{ backgroundColor: 'rgba(9,53,64,0.85)', color: C.mint }}
          >
            La tienda de barrio, {BIZ.city} · foto de muestra
          </figcaption>
        </figure>
      </Reveal>

      {/* ── 02 · La casa ── */}
      <section id="la-casa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <Reveal>
          <Folio n="02" kicker="La casa" />
          <h2 className={`${H2} mt-8 md:mt-10 max-w-4xl text-[clamp(2.6rem,6vw,5rem)]`} style={{ color: C.petrol }}>
            Un obrador chico,
            <br />
            <em className="font-normal">atendido por su dueña</em>
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-14 grid lg:grid-cols-12 gap-10 lg:gap-x-10">
          <Reveal className="lg:col-span-7">
            <div className="md:columns-2 gap-10 text-[15px] md:text-base leading-[1.8]" style={{ color: C.ink }}>
              <p>
                <span
                  className={`${display.className} float-left text-[64px] leading-[0.78] pr-3 pt-1.5 font-semibold`}
                  style={{ color: C.petrol }}
                  aria-hidden="true"
                >
                  P
                </span>
                atagonia dulce es una pastelería de barrio en{' '}
                {BIZ.address}, {BIZ.city}, a pasos de la precordillera
                maulina. Aquí no hay vitrina infinita ni producción en
                serie: se hornea lo del día, se vende lo del día y lo
                que sobra no espera al mañana.
              </p>
              <p className="mt-5">
                La atención es directa: quien responde el WhatsApp es la
                misma persona que hace la masa y decora la torta. Por
                eso los encargos se conversan con calma — sabor, tamaño,
                relleno y fecha — antes de prender el horno.
              </p>
              <p className="mt-5">
                En Google la ficha todavía no acumula reseñas; la prueba
                diaria está en Instagram, donde ya la siguen{' '}
                {BIZ.followers} personas viendo qué salió del horno cada
                mañana.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-4 lg:col-start-9" delay={120}>
            <aside className="border-t-4 pt-7" style={{ borderColor: C.petrol, backgroundColor: C.soft }}>
              <div className="px-7 pb-7">
                <p className={KICKER} style={{ color: C.muted }}>
                  Datos de la casa
                </p>
                <dl className="mt-5 space-y-5 text-sm">
                  <div>
                    <dt className="font-bold mb-1" style={{ color: C.petrol }}>Dirección</dt>
                    <dd style={{ color: C.muted }}>{BIZ.address}, {BIZ.city}, {BIZ.region}</dd>
                  </div>
                  <div>
                    <dt className="font-bold mb-1" style={{ color: C.petrol }}>WhatsApp</dt>
                    <dd style={{ color: C.muted }}>
                      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${FOCUS} underline underline-offset-4 decoration-2 transition-colors hover:text-[#0E4C5C]`} style={{ textDecorationColor: C.mint }}>
                        {BIZ.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-bold mb-1" style={{ color: C.petrol }}>Instagram</dt>
                    <dd style={{ color: C.muted }}>
                      <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={`${FOCUS} underline underline-offset-4 decoration-2 transition-colors hover:text-[#0E4C5C]`} style={{ textDecorationColor: C.mint }}>
                        @patagoniadulcepasteleria
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-bold mb-1" style={{ color: C.petrol }}>Horario <span className="font-normal">(de muestra)</span></dt>
                    <dd>
                      <ul className="space-y-1" style={{ color: C.muted }}>
                        {HORAS.map((h) => (
                          <li key={h.days} className="flex justify-between gap-4">
                            <span>{h.days}</span>
                            <span>{h.time}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <figure className="mt-16 md:mt-24 max-w-4xl mx-auto text-center">
            <blockquote>
              <p className={`${display.className} italic font-normal text-[clamp(1.6rem,4vw,2.75rem)] leading-[1.2]`} style={{ color: C.petrol }}>
                “La repostería sureña no se apura: la masa lleva su
                tiempo y el horno no perdona la prisa.”
              </p>
            </blockquote>
            <figcaption className={`${KICKER} mt-6`} style={{ color: C.muted }}>
              Texto de muestra
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* ── 03 · Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20" style={{ backgroundColor: C.petrol }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-18 md:py-28">
          <Reveal>
            <Folio n="03" kicker="Precios de referencia" light />
            <div className="mt-8 md:mt-10 grid lg:grid-cols-12 gap-6 items-end">
              <h2 className={`${H2} lg:col-span-8 text-[clamp(2.6rem,6.5vw,5.75rem)]`} style={{ color: C.paper }}>
                La carta,
                <br />
                <em className="font-normal" style={{ color: C.mint }}>en referencia</em>
              </h2>
              <p className="lg:col-span-4 text-base leading-relaxed max-w-[46ch] lg:pb-3" style={{ color: 'rgba(247,249,249,0.85)' }}>
                Valores de muestra para el demo — no son los precios
                reales de la pastelería. Al publicar va la carta
                definitiva.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-12 md:mt-16">
              {PRECIOS.map((p) => (
                <li
                  key={p.name}
                  className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4 md:py-5 border-b"
                  style={{ borderColor: 'rgba(159,216,203,0.35)' }}
                >
                  <span className={`${display.className} text-xl md:text-2xl`} style={{ color: C.paper }}>
                    {p.name}
                  </span>
                  <span
                    className="flex-1 border-b border-dotted translate-y-[-6px]"
                    style={{ borderColor: 'rgba(159,216,203,0.5)' }}
                    aria-hidden="true"
                  />
                  <span className={`${display.className} italic text-xl md:text-2xl whitespace-nowrap`} style={{ color: C.mint }}>
                    {p.price}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
              <p className="text-sm max-w-[52ch]" style={{ color: 'rgba(247,249,249,0.8)' }}>
                ¿Encargo especial? La torta se cotiza según tamaño,
                relleno y decoración — escribe con la fecha y el número
                de personas.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} inline-flex items-center min-h-12 px-7 text-sm md:text-base font-bold transition-colors hover:bg-[#F7F9F9]`}
                style={{ backgroundColor: C.mint, color: C.deep }}
              >
                Hacer un pedido por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 04 · Pedidos y visita ── */}
      <section id="pedidos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <Reveal>
          <Folio n="04" kicker="Pedidos y visita" />
        </Reveal>
        <div className="mt-8 md:mt-10 grid lg:grid-cols-12 gap-10 lg:gap-x-10">
          <Reveal className="lg:col-span-6">
            <h2 className={`${H2} text-[clamp(2.6rem,6vw,5rem)]`} style={{ color: C.petrol }}>
              Se encarga
              <br />
              <em className="font-normal">por WhatsApp</em>
            </h2>
            <p className="mt-6 text-base leading-relaxed max-w-[46ch]" style={{ color: C.muted }}>
              Escribe con lo que necesitas, para cuántas personas y para
              qué fecha. Se confirma disponibilidad, se agenda y se
              retira en {BIZ.address}, {BIZ.city}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_LINK_TORTA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} inline-flex items-center min-h-12 px-7 text-sm md:text-base font-bold transition-colors hover:bg-[#093540]`}
                style={{ backgroundColor: C.petrol, color: C.paper }}
              >
                Encargar una torta
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} inline-flex items-center min-h-12 px-7 text-sm md:text-base font-bold border transition-colors hover:bg-[#0E4C5C] hover:text-[#F7F9F9]`}
                style={{ borderColor: C.petrol, color: C.petrol }}
              >
                Cómo llegar →
              </a>
            </div>
            <address className="not-italic mt-10 pt-6 border-t text-sm md:text-base leading-relaxed" style={{ borderColor: C.line, color: C.muted }}>
              {BIZ.name}
              <br />
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className={`${FOCUS} underline underline-offset-4 decoration-2 transition-colors hover:text-[#2F7A6A]`} style={{ textDecorationColor: C.mint, color: C.petrol }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={120}>
            <div className="border h-full min-h-[360px]" style={{ borderColor: C.line, backgroundColor: C.soft }}>
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-5">
          <div>
            <p className={`${display.className} font-semibold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(247,249,249,0.78)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className={`${FOCUS} underline underline-offset-2 transition-colors hover:text-white`}>
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(247,249,249,0.78)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`${FOCUS} hover:text-white transition-colors`}>
                {l.label}
              </a>
            ))}
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={`${FOCUS} hover:text-white transition-colors`}>
              Instagram
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(247,249,249,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-3 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(247,249,249,0.78)' }}>
            Sitio de ejemplo de Sitiazo: fotos, productos, precios y horarios son de muestra.
          </p>
        </div>
      </footer>

      <div className="contents [&>div]:bg-[#0A0A0A]">
        <DemoBand name={BIZ.name} />
      </div>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
