import type { Metadata } from 'next'
import Image from 'next/image'
import { Bitter, Rubik, Space_Mono } from 'next/font/google'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_CLASE, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Bitter({
  subsets: ['latin'],
  weight: ['500', '700', '800', '900'],
  style: ['normal', 'italic'],
})
const body = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
const mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-us19-mono',
})

const C = {
  slate: '#2F4858',
  slateDeep: '#22303A',
  yellow: '#F2B705',
  paper: '#F5F4EF',
  white: '#FFFFFF',
  gray: '#E6E5DF',
  ink: '#101418',
}

export const metadata: Metadata = {
  title: 'Ultrasport19 — Gimnasio en Pencahue',
  description:
    'Gimnasio en Pencahue, Región del Maule. Sala de pesas, entrenamiento funcional y planes con seguimiento. Agenda tu clase de prueba por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Entrenamiento', href: '#entrenamiento' },
  { label: 'El gimnasio', href: '#gimnasio' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const ENTRENAMIENTO = [
  {
    num: '01',
    src: `${IMG}/detalle1.webp`,
    alt: 'Rack de mancuernas hexagonales y barra olímpica sobre piso de caucho en Ultrasport19',
    name: 'Sala de fuerza',
    desc: 'Racks, bancas, barras y discos para trabajar con técnica. Pesas libres y máquinas para todos los niveles.',
    tag: 'pesas libres · máquinas',
  },
  {
    num: '02',
    src: `${IMG}/detalle3.webp`,
    alt: 'Zona funcional del gimnasio: estructura con correas TRX, anillas, kettlebells y cajones',
    name: 'Entrenamiento funcional',
    desc: 'TRX, anillas, kettlebells y cajones. Circuitos para moverte mejor, ganar resistencia y quemar energía.',
    tag: 'TRX · kettlebells · circuitos',
  },
  {
    num: '03',
    src: `${IMG}/detalle2.webp`,
    alt: 'Recepción del gimnasio con toallas, botellas y pizarrón de horarios de la semana',
    name: 'Plan y seguimiento',
    desc: 'Evaluación inicial, rutina según tu objetivo y revisión de cómo vas mes a mes. Nadie entrena a ciegas.',
    tag: 'evaluación · rutina · progreso',
  },
]

const PRECIOS = [
  {
    num: 'P.01',
    name: 'Plan mensual',
    desc: 'Acceso completo a la sala y a las clases',
    price: 'desde $25.000',
    highlight: true,
  },
  {
    num: 'P.02',
    name: 'Plan trimestral',
    desc: 'Lo mismo + evaluación de progreso',
    price: 'desde $65.000',
    highlight: false,
  },
  {
    num: 'P.03',
    name: 'Clase suelta',
    desc: 'Para probar el gimnasio o venir de pasada',
    price: 'desde $5.000',
    highlight: false,
  },
  {
    num: 'P.04',
    name: 'Plan personalizado',
    desc: 'Rutina a medida + seguimiento uno a uno',
    price: 'a convenir',
    highlight: false,
  },
]

const RESENAS = [
  {
    text: 'Buen ambiente y equipos en buen estado. Te corrigen la técnica y se preocupan de que progreses.',
    author: 'Socio del gimnasio · Pencahue',
  },
  {
    text: 'Se agradece un gimnasio así en la comuna: atención directa, sin filas para las máquinas y buena onda.',
    author: 'Socia del gimnasio · Pencahue',
  },
]

function Tag({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 font-mono text-[11px] md:text-xs uppercase tracking-[0.22em] font-bold px-3 py-1.5 border-[3px]`}
      style={{
        backgroundColor: dark ? C.ink : C.yellow,
        color: dark ? C.yellow : C.ink,
        borderColor: dark ? C.yellow : C.ink,
      }}
    >
      <span className="inline-block w-2 h-2" style={{ backgroundColor: dark ? C.yellow : C.slate }} aria-hidden="true" />
      {children}
    </p>
  )
}

function SpecStrip({ left, right }: { left: string; right: string }) {
  return (
    <div className="border-b-[3px]" style={{ borderColor: C.ink, backgroundColor: C.white }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-[38px] flex items-center gap-4 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold whitespace-nowrap" style={{ color: 'rgba(16,20,24,0.55)' }}>
        <span>{left}</span>
        <span
          aria-hidden="true"
          className="flex-1 h-[12px] self-end mb-[7px]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, rgba(16,20,24,0.45) 0 1.5px, transparent 1.5px 14px)',
            backgroundSize: '100% 12px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
          }}
        />
        <span>{right}</span>
      </div>
    </div>
  )
}

function Mark({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block px-2 -rotate-1"
      style={{ backgroundColor: C.yellow, color: C.ink, boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}
    >
      {children}
    </span>
  )
}

function SectionHead({
  num,
  tag,
  title,
  note,
  light = false,
}: {
  num: string
  tag: string
  title: React.ReactNode
  note?: string
  light?: boolean
}) {
  return (
    <div className="relative mb-10 md:mb-14">
      <span
        aria-hidden="true"
        className={`${display.className} hidden lg:block absolute -top-8 right-0 font-black leading-none select-none pointer-events-none text-[clamp(6rem,11vw,10rem)]`}
        style={{
          color: 'transparent',
          WebkitTextStroke: `2.5px ${light ? 'rgba(255,255,255,0.28)' : 'rgba(16,20,24,0.14)'}`,
        }}
      >
        {num}
      </span>
      <Reveal>
        <Tag dark={light}>{`${num} / ${tag}`}</Tag>
        <h2
          className={`${display.className} font-black uppercase leading-[0.98] tracking-[-0.01em] text-balance text-[clamp(1.9rem,6vw,4.2rem)] mt-5`}
          style={{ color: light ? C.white : C.ink }}
        >
          {title}
        </h2>
        {note && (
          <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.14em] mt-4 max-w-md" style={{ color: light ? 'rgba(255,255,255,0.6)' : 'rgba(16,20,24,0.6)' }}>
            {note}
          </p>
        )}
      </Reveal>
    </div>
  )
}

export default function Ultrasport19Page() {
  return (
    <div
      className={`us19-page ${body.className} ${mono.variable} min-h-screen antialiased`}
      style={{
        backgroundColor: C.paper,
        color: C.ink,
        backgroundImage:
          'linear-gradient(rgba(16,20,24,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(16,20,24,0.045) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .us19-page .font-mono { font-family: var(--font-us19-mono), monospace; }
        .us19-page a:focus-visible, .us19-page button:focus-visible, .us19-page summary:focus-visible {
          outline: 3px solid #F2B705;
          outline-offset: 3px;
        }
      `}</style>

      {/* ── Barra superior ── */}
      <header
        className="fixed top-0 inset-x-0 z-40 border-b-[3px]"
        style={{ backgroundColor: C.paper, borderColor: C.ink }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-[60px] md:h-[68px] flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-2.5 leading-none">
            <span
              className={`${display.className} font-black text-base md:text-lg px-2 py-1 border-[3px]`}
              style={{ backgroundColor: C.yellow, color: C.ink, borderColor: C.ink }}
            >
              U19
            </span>
            <span className="font-mono font-bold uppercase text-xs md:text-sm tracking-[0.2em]">
              Ultrasport19
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7" aria-label="Principal">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-[0.18em] font-bold hover:underline underline-offset-4 decoration-2"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${display.className} shrink-0 font-black uppercase text-xs md:text-sm px-4 md:px-5 py-2.5 border-[3px] transition-[transform,box-shadow] shadow-[4px_4px_0_#101418] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#101418] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none`}
            style={{ backgroundColor: C.slate, color: C.white, borderColor: C.ink }}
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.slateDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior de Ultrasport19: racks de sentadilla, bancas y mancuernas, con la torre de la iglesia de Pencahue por el ventanal"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(34,48,58,0.92) 0%, rgba(34,48,58,0.55) 52%, rgba(242,183,5,0.18) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16 pt-40">
          <Reveal>
            <Tag>Gimnasio · Pencahue · Región del Maule</Tag>
            <h1
              className={`${display.className} font-black uppercase leading-[0.95] tracking-[-0.015em] text-balance text-[clamp(2.6rem,10vw,6.5rem)] mt-6 mb-6`}
              style={{ color: C.white }}
            >
              Entrena
              <br />
              <Mark>en serio</Mark>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9 font-medium" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Sala de pesas, entrenamiento funcional y planes con seguimiento.
              Un gimnasio de comuna donde te enseñan a entrenar bien.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={WA_LINK_CLASE}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-black uppercase text-sm md:text-base px-7 py-4 border-[3px] transition-[transform,box-shadow] shadow-[6px_6px_0_#2F4858] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#2F4858] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none`}
                style={{ backgroundColor: C.yellow, color: C.ink, borderColor: C.ink }}
              >
                Agendar clase de prueba →
              </a>
              <a
                href="#entrenamiento"
                className={`${display.className} font-black uppercase text-sm md:text-base px-7 py-4 border-[3px] border-white text-white transition-colors hover:bg-white hover:text-[#101418]`}
              >
                Qué puedes entrenar
              </a>
            </div>
          </Reveal>
        </div>
        {/* retícula de datos al pie del hero */}
        <div className="relative border-t-[3px]" style={{ borderColor: C.ink, backgroundColor: C.paper }}>
          <dl className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
            {[
              { v: `${BIZ.reviews}`, l: 'reseñas en Google', href: MAPS_URL },
              { v: BIZ.igFollowers, l: 'seguidores en Instagram', href: BIZ.instagram },
              { v: BIZ.phoneDisplay, l: 'WhatsApp directo', href: WA_LINK },
              { v: 'Pencahue', l: 'Región del Maule' },
            ].map((s, i) => (
              <div key={s.l} className={`border-r-[3px] last:border-r-0 ${i % 2 === 1 ? 'max-md:border-r-0' : ''} px-4 md:px-6 py-4 md:py-5`} style={{ borderColor: C.ink }}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: 'rgba(16,20,24,0.55)' }}>
                  {s.l}
                </dt>
                <dd className={`${display.className} font-black text-lg md:text-2xl leading-tight mt-1`} style={{ color: C.slate }}>
                  {s.href ? (
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 decoration-[3px]">
                      {s.v}
                    </a>
                  ) : (
                    s.v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Entrenamiento: índice numerado con foto por bloque ── */}
      <section id="entrenamiento" className="scroll-mt-24 border-b-[3px]" style={{ borderColor: C.ink }}>
        <SpecStrip left="Ficha — Entrenamiento" right="U19 · Pencahue" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <SectionHead
            num="01"
            tag="Entrenamiento"
            title={
              <>
                Tres formas
                <br />
                de <Mark>entrenar</Mark>
              </>
            }
            note="Listado de muestra: al publicar van las clases y horarios reales del gimnasio."
          />
          <ul>
            {ENTRENAMIENTO.map((s, i) => (
              <li key={s.num} className="border-t-[3px] last:border-b-[3px]" style={{ borderColor: C.ink }}>
                <Reveal delay={i * 60}>
                  <div className={`grid gap-5 md:gap-8 py-7 md:py-9 items-center ${i % 2 === 1 ? 'md:grid-cols-[1fr_340px_96px] lg:grid-cols-[1fr_340px_120px]' : 'md:grid-cols-[96px_340px_1fr] lg:grid-cols-[120px_340px_1fr]'}`}>
                    <span
                      aria-hidden="true"
                      className={`${display.className} font-black leading-none text-5xl md:text-6xl lg:text-7xl select-none ${i % 2 === 1 ? 'md:order-3' : ''}`}
                      style={{ color: 'transparent', WebkitTextStroke: `2px ${C.slate}` }}
                    >
                      {s.num}
                    </span>
                    <figure
                      className={`relative overflow-hidden border-[3px] aspect-[16/10] ${i % 2 === 1 ? 'md:order-2' : ''}`}
                      style={{ borderColor: C.ink, boxShadow: `8px 8px 0 ${C.yellow}` }}
                    >
                      <Image
                        src={s.src}
                        alt={s.alt}
                        fill
                        sizes="(min-width: 1024px) 340px, (min-width: 768px) 280px, 92vw"
                        loading="eager"
                        className="object-cover"
                      />
                    </figure>
                    <div>
                      <h3 className={`${display.className} font-black uppercase text-2xl md:text-3xl leading-tight mb-2`}>
                        {s.name}
                      </h3>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] font-bold mb-3" style={{ color: C.slate }}>
                        {s.tag}
                      </p>
                      <p className="text-[15px] md:text-base leading-relaxed max-w-lg mb-4" style={{ color: 'rgba(16,20,24,0.7)' }}>
                        {s.desc}
                      </p>
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] font-bold underline underline-offset-4 decoration-2 hover:decoration-[3px] hover:underline-offset-8 transition-all"
                        style={{ color: C.slate, textDecorationColor: C.slate }}
                      >
                        Consultar por WhatsApp →
                      </a>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── El gimnasio ── */}
      <section id="gimnasio" className="scroll-mt-24 border-b-[3px]" style={{ borderColor: C.ink, backgroundColor: C.slate }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <div
              className="border-[3px]"
              style={{ borderColor: C.ink, backgroundColor: C.white, boxShadow: `10px 10px 0 ${C.yellow}` }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={`${IMG}/ambiente.webp`}
                  alt="Fachada de Ultrasport19: edificio de hormigón a nivel de calle con ventanales donde se ven las máquinas"
                  fill
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  loading="eager"
                  className="object-cover"
                />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] px-4 py-3 border-t-[3px]" style={{ borderColor: C.ink, color: 'rgba(16,20,24,0.55)' }}>
                El gimnasio a nivel de calle · {BIZ.city}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Tag dark>02 / El gimnasio</Tag>
            <h2
              className={`${display.className} font-black uppercase leading-[0.98] text-balance text-[1.8rem] md:text-5xl mt-5 mb-6`}
              style={{ color: C.white }}
            >
              De Pencahue,
              <br />
              <span style={{ color: C.yellow }}>para Pencahue</span>
            </h2>
            <p className="text-[15px] md:text-base leading-relaxed mb-4 max-w-[54ch]" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Ultrasport19 es el gimnasio de la comuna: aquí no eres un número
              más. Hablas directo con quien arma tu rutina y corrige tu técnica
              en la sala.
            </p>
            <p className="text-[15px] md:text-base leading-relaxed mb-8 max-w-[54ch]" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Lo que más valoran quienes entrenan: el ambiente, que se aprende
              de verdad y que el progreso se mide, no se promete.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 border-[3px]" style={{ borderColor: C.ink, backgroundColor: C.paper }}>
              {[
                { v: `${BIZ.reviews}`, l: 'reseñas en Google', href: MAPS_URL },
                { v: BIZ.igFollowers, l: 'seguidores en Instagram', href: BIZ.instagram },
                { v: 'Directo', l: 'hablas con el equipo', href: WA_LINK },
              ].map((s) => (
                <a
                  key={s.l}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-4 sm:border-r-[3px] last:border-r-0 border-b-[3px] sm:border-b-0 last:border-b-0 hover:bg-[#ECEAE0] transition-colors"
                  style={{ borderColor: C.ink }}
                >
                  <p className={`${display.className} font-black text-2xl leading-none`} style={{ color: C.slate }}>
                    {s.v}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] mt-1.5" style={{ color: 'rgba(16,20,24,0.6)' }}>
                    {s.l}
                  </p>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
        {/* reseñas de muestra */}
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] font-bold mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Lo que dicen los socios — textos de muestra; al publicar van las reseñas reales de Google
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={i} delay={i * 100}>
                <figure
                  className="h-full border-[3px] p-6 md:p-7"
                  style={{ backgroundColor: C.paper, borderColor: C.ink, boxShadow: `6px 6px 0 ${C.yellow}` }}
                >
                  <blockquote className={`${display.className} font-bold italic text-base md:text-lg leading-snug mb-4`}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className="font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: 'rgba(16,20,24,0.55)' }}>
                    {r.author} · Reseña de ejemplo
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-24 border-b-[3px]" style={{ borderColor: C.ink }}>
        <SpecStrip left="Lista — Precios" right="Valores de muestra" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <SectionHead
            num="03"
            tag="Precios"
            title={
              <>
                Planes de
                <br />
                <Mark>referencia</Mark>
              </>
            }
            note="Valores de muestra para esta maqueta: los precios reales se confirman por WhatsApp."
          />
          <Reveal>
            <div className="border-[3px]" style={{ borderColor: C.ink, backgroundColor: C.white, boxShadow: `10px 10px 0 ${C.slate}` }}>
              <div className="hidden md:grid grid-cols-[80px_1.2fr_1.6fr_180px] gap-4 px-5 md:px-7 py-3.5 border-b-[3px] font-mono text-[10px] uppercase tracking-[0.18em] font-bold" style={{ borderColor: C.ink, backgroundColor: C.gray, color: 'rgba(16,20,24,0.6)' }}>
                <span>Ítem</span>
                <span>Plan</span>
                <span>Qué incluye</span>
                <span className="text-right">Valor*</span>
              </div>
              {PRECIOS.map((p) => (
                <div
                  key={p.num}
                  className="grid grid-cols-[auto_1fr] md:grid-cols-[80px_1.2fr_1.6fr_180px] gap-x-4 gap-y-1.5 md:gap-4 px-5 md:px-7 py-5 border-b-[3px] last:border-b-0 items-baseline"
                  style={{ borderColor: C.ink, backgroundColor: p.highlight ? C.yellow : C.white }}
                >
                  <span className="max-md:order-1 font-mono text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: p.highlight ? C.ink : C.slate }}>
                    {p.num}
                  </span>
                  <h3 className={`${display.className} max-md:order-3 max-md:col-span-2 font-black uppercase text-lg md:text-xl leading-tight`}>
                    {p.name}
                  </h3>
                  <p className="max-md:order-4 max-md:col-span-2 text-sm leading-relaxed" style={{ color: 'rgba(16,20,24,0.65)' }}>
                    {p.desc}
                  </p>
                  <p className={`${display.className} max-md:order-2 max-md:justify-self-end font-black text-lg md:text-xl md:text-right`}>
                    {p.price}
                  </p>
                </div>
              ))}
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] px-5 md:px-7 py-3" style={{ backgroundColor: C.ink, color: C.yellow }}>
                * Valores de muestra — al publicar van los precios reales
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-24 border-b-[3px]" style={{ borderColor: C.ink, backgroundColor: C.gray }}>
        <SpecStrip left="Cómo llegar" right="WA directo" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <SectionHead
            num="04"
            tag="Contacto"
            title={
              <>
                Vienes,
                <br />
                entrenas, <Mark>repites</Mark>
              </>
            }
          />
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <Reveal>
              <div className="h-full border-[3px] flex flex-col" style={{ borderColor: C.ink, backgroundColor: C.white, boxShadow: `10px 10px 0 ${C.yellow}` }}>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] px-5 md:px-7 py-3 border-b-[3px] font-bold" style={{ borderColor: C.ink, backgroundColor: C.yellow }}>
                  Datos del gimnasio
                </p>
                <dl className="flex-1">
                  {[
                    { k: 'Ubicación', v: `${BIZ.city}, ${BIZ.region} · ${BIZ.postal}`, href: MAPS_URL },
                    { k: 'WhatsApp', v: BIZ.phoneDisplay, href: WA_LINK },
                    { k: 'Correo', v: BIZ.email, href: `mailto:${BIZ.email}` },
                    { k: 'Instagram', v: `${BIZ.igUser} · ${BIZ.igFollowers} seguidores`, href: BIZ.instagram },
                  ].map((d) => (
                    <div key={d.k} className="grid sm:grid-cols-[140px_1fr] gap-1 sm:gap-4 px-5 md:px-7 py-4 border-b-[3px] last:border-b-0" style={{ borderColor: C.ink }}>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.18em] font-bold self-center" style={{ color: 'rgba(16,20,24,0.55)' }}>
                        {d.k}
                      </dt>
                      <dd>
                        <a href={d.href} target="_blank" rel="noopener noreferrer" className={`${display.className} font-bold text-base md:text-lg hover:underline underline-offset-4 decoration-2`} style={{ color: C.slate }}>
                          {d.v}
                        </a>
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="p-5 md:p-7 border-t-[3px]" style={{ borderColor: C.ink }}>
                  <a
                    href={WA_LINK_CLASE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} block text-center font-black uppercase text-sm md:text-base px-6 py-4 border-[3px] transition-[transform,box-shadow] shadow-[5px_5px_0_#2F4858] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#2F4858] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none`}
                    style={{ backgroundColor: C.yellow, color: C.ink, borderColor: C.ink }}
                  >
                    Escribir por WhatsApp →
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full min-h-[360px] border-[3px] flex flex-col" style={{ borderColor: C.ink, backgroundColor: C.white, boxShadow: `10px 10px 0 ${C.slate}` }}>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] px-5 py-3 border-b-[3px] font-bold" style={{ borderColor: C.ink, backgroundColor: C.slate, color: C.white }}>
                  Mapa · {BIZ.city}
                </p>
                <iframe
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full flex-1 min-h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.slateDeep }}>
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `url(${IMG}/hero.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-black uppercase text-[clamp(2rem,7vw,4.5rem)] leading-[0.98] mb-6`} style={{ color: C.white }}>
              La primera clase
              <br />
              <Mark>se agenda hoy</Mark>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
              Escríbenos por WhatsApp, cuéntanos tu objetivo y coordinamos
              tu primera visita al gimnasio.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-black uppercase text-sm md:text-base px-8 py-4 border-[3px] transition-[transform,box-shadow] shadow-[6px_6px_0_#101418] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#101418] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none`}
              style={{ backgroundColor: C.yellow, color: C.ink, borderColor: C.ink }}
            >
              Escribir por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="max-w-6xl mx-auto pl-5 pr-20 md:pl-8 py-6 flex flex-col gap-2">
          <p className={`${display.className} font-black uppercase text-xl flex items-center gap-3`}>
            <span className="inline-block px-2 py-0.5 border-[3px] text-sm" style={{ backgroundColor: C.yellow, color: C.ink, borderColor: C.yellow }}>
              U19
            </span>
            {BIZ.name}
          </p>
          <address className="not-italic font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: 'rgba(245,244,239,0.75)' }}>
            {BIZ.city} · {BIZ.region} · {BIZ.email}
          </address>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(245,244,239,0.78)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.yellow }}>Sitiazo</a>{' '}
            para {BIZ.name}. Textos, precios, horarios y fotos son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.yellow }}>¿Lo hacemos realidad?</a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
