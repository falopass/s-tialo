import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_CONSULTA, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
})
const body = Lato({ subsets: ['latin'], weight: ['300', '400', '700', '900'] })

const C = {
  paper: '#F7F9F9',
  soft: '#E8F1F0',
  mint: '#9FD8CB',
  mintSoft: '#DCEFEA',
  petrol: '#0E4C5C',
  petrolDeep: '#093540',
  ink: '#1E2A2E',
  muted: '#5C6E73',
  line: 'rgba(30,42,46,0.18)',
  lineLight: 'rgba(247,249,249,0.24)',
}

export const metadata: Metadata = {
  title: 'Centro Spa Roxana: centro de estética en Curicó',
  description:
    'Centro de estética en Julio Montt 1170, Curicó. Limpieza facial, masajes, manicure y más, con atención personalizada. Pide tu hora por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El centro', href: '#el-centro' },
  { label: 'Precios', href: '#precios' },
  { label: 'Visítanos', href: '#visitanos' },
]

const INDICE = [
  { n: '01', label: 'Servicios', href: '#servicios' },
  { n: '02', label: 'El centro', href: '#el-centro' },
  { n: '03', label: 'Precios', href: '#precios' },
  { n: '04', label: 'Visítanos', href: '#visitanos' },
]

const SERVICIOS = [
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Carro de tratamiento con bowl de agua, aceites y toallas para una limpieza facial',
    name: 'Limpieza facial profunda',
    desc: 'Higiene, exfoliación e hidratación según tu tipo de piel, con productos suaves y luz natural.',
    box: 'lg:col-span-7',
    aspect: 'aspect-[4/3]',
  },
  {
    src: `${IMG}/hero.webp`,
    alt: 'Sala de tratamiento con camilla, toallas y plantas junto a la ventana',
    name: 'Masajes y relajación',
    desc: 'Masaje descontracturante de espalda y cuello para soltar la semana, con música tranquila.',
    box: 'lg:col-span-5 lg:mt-24',
    aspect: 'aspect-[4/5]',
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Estación de manicure junto a la ventana con herramientas, toalla y esmaltes',
    name: 'Manicure y pedicure',
    desc: 'Manos y pies ordenados: cutícula, limado y esmaltado a elección, con esmalte de larga duración.',
    box: 'lg:col-span-5 lg:col-start-2',
    aspect: 'aspect-square',
  },
]

const TAMBIEN = [
  'Depilación con cera',
  'Perfilado de cejas',
  'Tratamientos corporales',
  'Pestañas y maquillaje',
]

const PRECIOS = [
  { name: 'Limpieza facial profunda', price: 'desde $25.000' },
  { name: 'Masaje de relajación (50 min)', price: 'desde $22.000' },
  { name: 'Manicure tradicional', price: 'desde $12.000' },
  { name: 'Pedicure completo', price: 'desde $15.000' },
  { name: 'Depilación de piernas completas', price: 'desde $18.000' },
  { name: 'Perfilado de cejas', price: 'desde $8.000' },
]

const RESEÑAS = [
  {
    text: 'Salí con la piel limpia y muy tranquila. Se nota el cuidado en cada detalle.',
    author: 'Clienta del centro',
  },
  {
    text: 'Me explicaron todo antes de empezar y el resultado se notó desde la primera sesión.',
    author: 'Primera visita',
  },
  {
    text: 'Puntuales, ordenadas y muy amables. El espacio es luminoso y silencioso.',
    author: 'Vecina de Curicó',
  },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '10:00 a 19:00' },
  { days: 'Sábado', time: '10:00 a 14:00' },
]

function Folio({
  n,
  label,
  light = false,
}: {
  n: string
  label: string
  light?: boolean
}) {
  return (
    <div className="flex items-baseline gap-4 md:gap-6 mb-6 md:mb-9">
      <span
        className={`${display.className} leading-none text-4xl md:text-5xl`}
        style={{ color: light ? C.mint : C.petrol }}
      >
        {n}
      </span>
      <span
        className="text-[11px] uppercase tracking-[0.24em] font-bold"
        style={{ color: light ? 'rgba(247,249,249,0.82)' : C.muted }}
      >
        {label}
      </span>
      <span
        className="flex-1 border-t"
        style={{ borderColor: light ? C.lineLight : C.line }}
        aria-hidden="true"
      />
    </div>
  )
}

export default function CentroSpaRoxanaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(247,249,249,0.95)',
          ink: C.petrol,
          line: C.line,
          btnBg: C.petrol,
          btnInk: '#F7F9F9',
        }}
      />

      {/* ── Portada: hero a sangre ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.petrolDeep }}
      >
        <img
          src={`${IMG}/hero.webp`}
          alt="Sala de tratamiento del centro con camilla, toallas y luz natural"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(247,249,249,0.92) 0%, rgba(247,249,249,0.4) 14%, rgba(247,249,249,0) 30%, rgba(9,53,64,0) 44%, rgba(9,53,64,0.7) 76%, rgba(9,53,64,0.93) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-8 md:pb-12 pt-24">
          <Reveal>
            <h1
              className={`${display.className} font-medium leading-[1.05] tracking-[-0.015em] text-[clamp(2.5rem,7.4vw,6.1rem)]`}
              style={{ color: '#F7F9F9' }}
            >
              Piel, manos y calma
              <br />
              <em className="font-semibold" style={{ color: C.mint }}>
                en el centro de Curicó
              </em>
            </h1>
            <p
              className="mt-6 max-w-xl text-base md:text-lg leading-relaxed"
              style={{ color: 'rgba(247,249,249,0.86)' }}
            >
              Centro de estética en Julio Montt 1170, Curicó. Atención
              personalizada y un espacio luminoso para cuidarte con calma.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 transition-transform active:translate-y-[1px]`}
                style={{ backgroundColor: C.mint, color: C.petrolDeep }}
              >
                Pedir hora por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 border transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(247,249,249,0.55)', color: '#F7F9F9' }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
        </div>
        {/* cintillo de portada con datos y enlaces reales */}
        <div
          className="relative border-t"
          style={{
            borderColor: C.lineLight,
            backgroundColor: 'rgba(9,53,64,0.55)',
            backdropFilter: 'blur(6px)',
          }}
        >
          <div
            className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-2 text-[11px] md:text-xs uppercase tracking-[0.18em]"
            style={{ color: 'rgba(247,249,249,0.78)' }}
          >
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {BIZ.address}, {BIZ.city}
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {BIZ.reviews} reseñas en Google
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              WhatsApp {BIZ.phoneDisplay}
            </a>
            <span className="hidden md:inline" style={{ color: C.mint }}>
              sitio de ejemplo
            </span>
          </div>
        </div>
      </section>

      {/* ── Índice de la revista ── */}
      <nav aria-label="Índice de secciones" className="border-b" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 flex flex-wrap items-baseline gap-x-10 gap-y-3">
          <span className="text-[11px] uppercase tracking-[0.24em] font-bold" style={{ color: C.muted }}>
            En este número
          </span>
          {INDICE.map((s) => (
            <a key={s.href} href={s.href} className="group flex items-baseline gap-2">
              <span className={`${display.className} text-lg leading-none`} style={{ color: C.petrol }}>
                {s.n}
              </span>
              <span
                className="text-[11px] uppercase tracking-[0.2em] group-hover:underline underline-offset-4"
                style={{ color: C.ink }}
              >
                {s.label}
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* ── 01 · Servicios ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24">
        <Reveal>
          <Folio n="01" label="Servicios" />
          <h2
            className={`${display.className} font-medium text-4xl md:text-6xl leading-[1.06] tracking-[-0.01em] max-w-[16ch]`}
            style={{ color: C.petrol }}
          >
            Los cuidados del centro
          </h2>
          <p className="mt-5 max-w-[60ch] text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
            Una muestra de los servicios del centro. Al publicar van los
            servicios, las descripciones y los valores reales.
          </p>
        </Reveal>

        <div className="mt-10 md:mt-16 grid gap-y-12 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-20">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.name} className={s.box} delay={i * 90}>
              <article>
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="eager"
                  className={`w-full ${s.aspect} object-cover`}
                />
                <h3
                  className={`${display.className} text-2xl md:text-3xl mt-5 mb-2.5`}
                  style={{ color: C.petrol }}
                >
                  {s.name}
                </h3>
                <p className="text-sm md:text-base leading-relaxed max-w-[52ch]" style={{ color: C.muted }}>
                  {s.desc}
                </p>
              </article>
            </Reveal>
          ))}

          <Reveal className="lg:col-span-5 lg:col-start-8 lg:mt-16" delay={220}>
            <aside className="h-full p-7 md:p-9 border-t-2" style={{ backgroundColor: C.soft, borderColor: C.petrol }}>
              <h3 className={`${display.className} text-xl md:text-2xl mb-5`} style={{ color: C.petrol }}>
                También ofrecemos
              </h3>
              <ul className="space-y-3 mb-8">
                {TAMBIEN.map((item) => (
                  <li key={item} className="flex items-baseline gap-3 text-sm md:text-base" style={{ color: C.ink }}>
                    <span className="inline-block w-4 border-t" style={{ borderColor: C.mint }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK_CONSULTA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm md:text-base underline underline-offset-4 decoration-2`}
                style={{ color: C.petrol, textDecorationColor: C.mint }}
              >
                Consultar por WhatsApp →
              </a>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* ── 02 · El centro ── */}
      <section id="el-centro" className="scroll-mt-20 mt-20 md:mt-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Folio n="02" label="El centro" />
            <h2
              className={`${display.className} font-medium text-4xl md:text-6xl leading-[1.06] tracking-[-0.01em] max-w-[16ch]`}
              style={{ color: C.petrol }}
            >
              En pleno centro de Curicó
            </h2>
          </Reveal>
          <div className="mt-8 md:mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-7">
              <p className="text-base md:text-lg leading-relaxed" style={{ color: C.ink }}>
                <span
                  className={`${display.className} float-left text-[3.4rem] leading-[0.78] mr-3 mt-1.5`}
                  style={{ color: C.petrol }}
                >
                  C
                </span>
                entro Spa Roxana atiende en Julio Montt 1170, a pasos del
                centro de Curicó. Es un espacio luminoso y ordenado, pensado
                para que llegues, te relajes y salgas sintiéndote bien.
              </p>
              <div
                className="mt-7 md:columns-2 md:gap-10 text-sm md:text-[15px] leading-relaxed"
                style={{ color: C.muted }}
              >
                <p>
                  La atención es directa: te escuchan, revisan tu piel y te
                  recomiendan lo que de verdad necesitas, sin vueltas. Cada
                  tratamiento se agenda con hora para que no esperes de más.
                </p>
                <p className="mt-4">
                  Puedes pedir tu hora por WhatsApp y coordinar el día que te
                  acomode. Si es tu primera visita, cuéntanos qué te gustaría
                  mejorar y te orientamos.
                </p>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-4 lg:col-start-9" delay={120}>
              <aside className="border-t pt-6" style={{ borderColor: C.line }}>
                <p className="text-[11px] uppercase tracking-[0.24em] font-bold mb-5" style={{ color: C.muted }}>
                  Datos del centro
                </p>
                <ul className="space-y-4 text-sm md:text-base">
                  <li style={{ color: C.muted }}>
                    <span className="block text-[11px] uppercase tracking-[0.18em] mb-1" style={{ color: C.petrol }}>
                      Dirección
                    </span>
                    {BIZ.address}, {BIZ.city}
                  </li>
                  <li style={{ color: C.muted }}>
                    <span className="block text-[11px] uppercase tracking-[0.18em] mb-1" style={{ color: C.petrol }}>
                      Reseñas
                    </span>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 decoration-2"
                      style={{ textDecorationColor: C.mint }}
                    >
                      {BIZ.reviews} reseñas en Google
                    </a>
                  </li>
                  <li style={{ color: C.muted }}>
                    <span className="block text-[11px] uppercase tracking-[0.18em] mb-1" style={{ color: C.petrol }}>
                      Instagram
                    </span>
                    <a
                      href={BIZ.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 decoration-2"
                      style={{ textDecorationColor: C.mint }}
                    >
                      @sparoxana, {BIZ.followers} seguidores
                    </a>
                  </li>
                  <li style={{ color: C.muted }}>
                    <span className="block text-[11px] uppercase tracking-[0.18em] mb-1" style={{ color: C.petrol }}>
                      WhatsApp
                    </span>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 decoration-2"
                      style={{ textDecorationColor: C.mint }}
                    >
                      {BIZ.phoneDisplay}
                    </a>
                  </li>
                </ul>
              </aside>
            </Reveal>
          </div>
        </div>

        {/* Foto grande que rompe la grilla, con panel de reseñas encima */}
        <Reveal delay={100}>
          <div className="relative mt-14 md:mt-20">
            <img
              src={`${IMG}/detalle2.webp`}
              alt="Recepción del centro con flores, productos y vista a la sala de tratamiento"
              loading="eager"
              className="w-full h-[64vw] max-h-[560px] object-cover"
            />
            <div className="max-w-6xl mx-auto px-5 md:px-8">
              <div
                className="relative -mt-14 md:-mt-24 max-w-3xl p-7 md:p-10"
                style={{ backgroundColor: C.paper }}
              >
                <p className="text-[11px] uppercase tracking-[0.24em] font-bold mb-5" style={{ color: C.petrol }}>
                  {BIZ.reviews} reseñas en Google
                </p>
                <blockquote
                  className={`${display.className} italic text-2xl md:text-3xl leading-snug mb-6`}
                  style={{ color: C.petrol }}
                >
                  “{RESEÑAS[0].text}”
                </blockquote>
                <p className="text-[11px] uppercase tracking-[0.18em] mb-8" style={{ color: C.muted }}>
                  {RESEÑAS[0].author} · Reseña de ejemplo
                </p>
                <div className="grid sm:grid-cols-2 gap-6 border-t pt-6" style={{ borderColor: C.line }}>
                  {RESEÑAS.slice(1).map((r) => (
                    <figure key={r.author}>
                      <blockquote className="text-sm md:text-[15px] leading-relaxed mb-3" style={{ color: C.ink }}>
                        “{r.text}”
                      </blockquote>
                      <figcaption className="text-[11px] uppercase tracking-[0.18em]" style={{ color: C.muted }}>
                        {r.author} · Reseña de ejemplo
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <p className="mt-8 text-xs leading-relaxed" style={{ color: C.muted }}>
                  Reseñas de ejemplo para esta demostración: al publicar van
                  los textos reales de la ficha de Google.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── 03 · Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20 mt-20 md:mt-28" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Folio n="03" label="Precios de referencia" />
            <h2
              className={`${display.className} font-medium text-4xl md:text-6xl leading-[1.06] tracking-[-0.01em] max-w-[16ch]`}
              style={{ color: C.petrol }}
            >
              Valores de referencia
            </h2>
            <p className="mt-5 max-w-[60ch] text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
              Precios de muestra para esta demostración: al publicar van los
              valores reales del centro. Confirma el valor de tu tratamiento
              por WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-10 md:mt-14 grid md:grid-cols-2 md:gap-x-16">
              {PRECIOS.map((p) => (
                <li
                  key={p.name}
                  className="flex items-baseline justify-between gap-6 py-4 border-b border-dotted"
                  style={{ borderColor: C.line }}
                >
                  <span className="text-sm md:text-base" style={{ color: C.ink }}>
                    {p.name}
                  </span>
                  <span className={`${display.className} text-base md:text-lg whitespace-nowrap`} style={{ color: C.petrol }}>
                    {p.price}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={160}>
            <a
              href={WA_LINK_CONSULTA}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block mt-10 font-semibold text-sm md:text-base px-7 py-3.5 transition-transform active:translate-y-[1px]`}
              style={{ backgroundColor: C.petrol, color: '#F7F9F9' }}
            >
              Consultar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── 04 · Visítanos ── */}
      <section id="visitanos" className="scroll-mt-20" style={{ backgroundColor: C.petrol }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Folio n="04" label="Visítanos" light />
            <h2
              className={`${display.className} font-medium text-4xl md:text-6xl leading-[1.06] tracking-[-0.01em] max-w-[16ch]`}
              style={{ color: '#F7F9F9' }}
            >
              Julio Montt 1170,
              <br />
              <em style={{ color: C.mint }}>Curicó</em>
            </h2>
          </Reveal>
          <div className="mt-10 md:mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14 items-start">
            <Reveal className="lg:col-span-5">
              <address className="not-italic text-sm md:text-base leading-relaxed mb-7" style={{ color: 'rgba(247,249,249,0.82)' }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}, Chile
              </address>
              <ul className="space-y-2.5 mb-5">
                {HORAS.map((h) => (
                  <li key={h.days} className="flex items-baseline justify-between gap-6 text-sm md:text-base" style={{ color: 'rgba(247,249,249,0.82)' }}>
                    <span>{h.days}</span>
                    <span style={{ color: '#F7F9F9' }}>{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs leading-relaxed mb-8 max-w-sm" style={{ color: 'rgba(247,249,249,0.82)' }}>
                Horario referencial: al publicar van los horarios reales del
                centro.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 transition-transform active:translate-y-[1px]`}
                  style={{ backgroundColor: C.mint, color: C.petrolDeep }}
                >
                  Pedir hora por WhatsApp
                </a>
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline underline-offset-4 decoration-2"
                  style={{ color: 'rgba(247,249,249,0.85)', textDecorationColor: 'rgba(159,216,203,0.6)' }}
                >
                  @sparoxana
                </a>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={120}>
              <div className="border" style={{ borderColor: C.lineLight }}>
                <iframe
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-[300px] md:h-[380px] block"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
        <Reveal>
          <figure>
            <img
              src={`${IMG}/ambiente.webp`}
              alt="Fachada del centro sobre la calle, con vitrina y vista a la calle Julio Montt"
              loading="eager"
              className="w-full h-[44vw] max-h-[440px] object-cover"
            />
            <figcaption className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-[11px] uppercase tracking-[0.18em]" style={{ color: 'rgba(247,249,249,0.82)' }}>
              La entrada, sobre Julio Montt
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* ── Franja Sitiazo ── */}
      <section className="border-t" style={{ backgroundColor: C.mintSoft, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className={`${display.className} text-xl md:text-2xl`} style={{ color: C.petrol }}>
            Sitio de ejemplo de Sitiazo
          </p>
          <p className="text-sm md:text-base" style={{ color: C.ink }}>
            Así se vería {BIZ.name} en internet. ¿Lo hacemos realidad?
          </p>
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className={`${display.className} shrink-0 font-semibold text-sm px-6 py-3 transition-transform active:translate-y-[1px]`}
            style={{ backgroundColor: C.petrol, color: '#F7F9F9' }}
          >
            Hablar con {SITE.name} →
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.petrolDeep, color: '#F7F9F9' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-24 md:pb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className={`${display.className} text-2xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(247,249,249,0.85)' }}>
              {BIZ.address}, {BIZ.city}
            </address>
          </div>
          <p className="text-xs leading-relaxed md:max-w-[26rem]" style={{ color: 'rgba(247,249,249,0.82)' }}>
            Mockup de Sitiazo: datos del centro reales; servicios, precios, reseñas y fotos de muestra.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
