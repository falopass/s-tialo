import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_SERVICIO, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/bricolage-grotesque/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  ink: '#17181A',
  signal: '#FFC300',
  steel: '#8A9199',
  // acero oscurecido: el acero puro no llega a contraste AA sobre blanco
  muted: '#6A6F75',
  paper: '#FFFFFF',
  soft: '#F2F3F5',
  line: '#E2E4E7',
}

const STRIPE = `repeating-linear-gradient(-45deg, ${C.signal} 0 14px, ${C.ink} 14px 28px)`

export const metadata: Metadata = demoMetadata({
  slug: 'danybloom',
  title: 'danybloom — Manicura y pedicura en Talca',
  description: 'Salón de manicura y pedicura en Camino Las Rastras, Talca. Manicura, semipermanente, kapping y pedicura con hora agendada por WhatsApp.',
  image: '/demos/danybloom/hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El salón', href: '#el-salon' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICIOS = [
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Manos con manicura nude recién terminada sobre toalla blanca',
    name: 'Manicura clásica',
    desc: 'Limado, cutícula prolija y esmalte tradicional. La pega de base, bien hecha: sin apuro y sin detalles al aire.',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Repisas de madera con esmaltes en degradé de nudes a rojos',
    name: 'Esmaltado semipermanente',
    desc: 'Color que aguanta semanas con el brillo del primer día. Se prepara la uña bien para que dure de verdad.',
  },
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Bandeja de mármol con limas, empujadores y alicate de cutícula',
    name: 'Kapping en gel',
    desc: 'Capa de refuerzo sobre la uña natural: más firmeza y resistencia sin alargar. Instrumental cuidado, siempre.',
  },
  {
    src: `${IMG}/ambiente.webp`,
    alt: 'Sillón de terciopelo rosa junto a la ventana, el rincón de pedicura',
    name: 'Pedicura completa',
    desc: 'Cuidado completo para los pies: limpieza, limado y esmalte, sentada cómoda y con calma.',
  },
]

const PRECIOS = [
  { name: 'Manicura clásica', desc: 'Limado, cutícula y esmalte tradicional', price: 'desde $10.000' },
  { name: 'Esmaltado semipermanente', desc: 'Incluye preparación de la uña', price: 'desde $15.000' },
  { name: 'Kapping en gel', desc: 'Refuerzo sobre uña natural', price: 'desde $18.000' },
  { name: 'Pedicura completa', desc: 'Cuidado y esmaltado de pies', price: 'desde $16.000' },
  { name: 'Retiro de semipermanente', desc: 'Sin dañar la uña natural', price: 'desde $5.000' },
]

const FICHA = [
  { k: 'Dirección', v: `${BIZ.address}, ${BIZ.city}` },
  { k: 'Atención', v: 'Con hora agendada, por WhatsApp' },
  { k: 'Instagram', v: `${BIZ.instagram} · ${BIZ.followers} seguidores` },
  { k: 'Reseñas en Google', v: 'Aún sin reseñas — la ficha recién se está armando' },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="font-mono text-[11px] uppercase tracking-[0.26em] mb-4 flex w-fit items-center gap-3 font-medium"
      style={{ color: light ? C.signal : C.muted }}
    >
      <span
        className="inline-block w-2.5 h-2.5 shrink-0"
        style={{ backgroundColor: C.signal }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

export default function DanybloomPage() {
  return (
    <div
      className={`db-page ${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .db-page a:focus-visible, .db-page button:focus-visible, .db-page summary:focus-visible {
          outline: 3px solid currentColor;
          outline-offset: 3px;
        }
      `}</style>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(255,255,255,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.ink,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero split: foto | texto ── */}
      <section id="inicio" className="grid lg:grid-cols-2 lg:min-h-svh" style={{ backgroundColor: C.ink }}>
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-0">
          <Image
            src={`${IMG}/hero.webp`}
            alt="Estación de manicura de danybloom: mesa blanca, lámpara y silla de terciopelo rosa"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-x-0 top-0 h-32 lg:h-44 pointer-events-none"
            style={{ background: 'linear-gradient(rgba(23,24,26,0.55), rgba(23,24,26,0))' }}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 bottom-0 w-[10px] hidden lg:block" style={{ background: STRIPE }} aria-hidden="true" />
          <div className="absolute bottom-0 left-0 right-0 h-[10px] lg:hidden" style={{ background: STRIPE }} aria-hidden="true" />
        </div>
        <div className="flex flex-col justify-center px-5 md:px-10 xl:px-16 py-14 md:py-16 lg:py-24">
          <Reveal>
            <Eyebrow light>Manicura · Pedicura · Talca</Eyebrow>
            <h1
              className={`${display.className} font-extrabold uppercase leading-[0.98] tracking-[-0.02em] text-[clamp(3rem,8.5vw,6.4rem)] mb-6`}
              style={{ color: '#FFFFFF' }}
            >
              Uñas bien
              <br />
              hechas,
              <br />
              <span style={{ color: C.signal }}>sin vueltas.</span>
            </h1>
            <p className="text-base md:text-lg font-normal leading-relaxed max-w-md mb-9" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Salón de manicura y pedicura en {BIZ.address}, {BIZ.city}.
              Atiende su dueña, con hora agendada: llegas, te atienden
              y sales lista. Sin esperas ni letra chica.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-wide text-sm md:text-base px-8 py-4 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95`}
                style={{ backgroundColor: C.signal, color: C.ink }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} font-bold uppercase tracking-wide text-sm md:text-base px-8 py-3 border-2 transition-all hover:bg-white/10 hover:-translate-y-0.5 active:scale-95`}
                style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#FFFFFF' }}
              >
                Ver servicios
              </a>
            </div>
            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: C.steel }}>
              {BIZ.address} · {BIZ.city} · {BIZ.instagram}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Servicios: split alternado ── */}
      <section id="servicios" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-10 md:pb-14">
          <Reveal>
            <Eyebrow>N.º 01 — Servicios</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end">
              <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-6xl leading-[0.98] tracking-[-0.01em]`}>
                La pega
                <br />
                <span style={{ color: C.muted }}>de cada día</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Esto es una muestra de la carta: al publicar van los
                servicios y precios reales de {BIZ.name}.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="border-t" style={{ borderColor: C.line }}>
          {SERVICIOS.map((s, i) => (
            <article
              key={s.name}
              className="grid md:grid-cols-2 border-b"
              style={{ borderColor: C.line, backgroundColor: i % 2 === 1 ? C.soft : C.paper }}
            >
              <div className={`relative aspect-[4/3] md:aspect-auto md:min-h-[400px] ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  loading="eager"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-12 lg:p-16">
                <Reveal>
                  <span
                    className={`${display.className} block font-extrabold text-6xl md:text-7xl leading-none mb-4`}
                    style={{ color: i % 2 === 1 ? C.signal : C.line }}
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                  <h3 className={`${display.className} font-extrabold uppercase text-3xl md:text-4xl leading-[1.0] mb-4`}>
                    {s.name}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed max-w-md mb-7" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                  <a
                    href={WA_LINK_SERVICIO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} inline-flex items-center gap-2 font-bold uppercase tracking-wide text-sm underline underline-offset-8 decoration-4 hover:decoration-[6px] transition-all`}
                    style={{ color: C.ink, textDecorationColor: C.signal }}
                  >
                    Agendar este servicio →
                  </a>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── El salón: ficha técnica ── */}
      <section id="el-salon" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <Reveal>
            <Eyebrow light>N.º 02 — El salón</Eyebrow>
            <h2
              className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[0.98] mb-6`}
              style={{ color: '#FFFFFF' }}
            >
              Un salón chico,
              <br />
              <span style={{ color: C.signal }}>atendido por su dueña</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md mb-5" style={{ color: 'rgba(255,255,255,0.72)' }}>
              {BIZ.name} trabaja en {BIZ.address}, a la salida de {BIZ.city}.
              Se atiende con hora agendada, así que cada clienta tiene su
              bloque completo: no hay fila ni espera.
            </p>
            <p className="text-sm md:text-base leading-relaxed max-w-md mb-8" style={{ color: 'rgba(255,255,255,0.72)' }}>
              La ficha de Google está recién armada y aún no tiene reseñas:
              las primeras las van a escribir las clientas de verdad, y este
              espacio las mostrará tal cual.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Hora agendada = hora cumplida', 'Precio claro antes de partir', 'Terminación prolija'].map((chip) => (
                <span
                  key={chip}
                  className="font-mono text-[11px] uppercase tracking-[0.14em] px-3 py-2 border"
                  style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.8)' }}
                >
                  {chip}
                </span>
              ))}
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: C.steel }}>
              Frases de muestra · se reemplazan por reseñas reales
            </p>
          </Reveal>
          <Reveal delay={140}>
            <dl
              className="border-t"
              style={{ borderColor: 'rgba(255,255,255,0.2)' }}
            >
              {FICHA.map((f) => (
                <div
                  key={f.k}
                  className="flex items-baseline justify-between gap-6 py-5 border-b"
                  style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] shrink-0" style={{ color: C.steel }}>
                    {f.k}
                  </dt>
                  <dd className="text-sm md:text-base font-medium text-right" style={{ color: '#FFFFFF' }}>
                    {f.k === 'Instagram' ? (
                      <a
                        href={BIZ.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 decoration-2"
                        style={{ textDecorationColor: C.signal }}
                      >
                        {f.v}
                      </a>
                    ) : (
                      f.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── Precios: orden de trabajo ── */}
      <section id="precios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <Eyebrow>N.º 03 — Precios</Eyebrow>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[0.98] mb-5`}>
              Orden de
              <br />
              <span style={{ color: C.muted }}>trabajo</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: C.muted }}>
              Valores de muestra para mostrar el formato de la carta:
              al publicar van los precios reales de cada servicio.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <ul className="border-t-2" style={{ borderColor: C.ink }}>
              {PRECIOS.map((p, i) => (
                <li
                  key={p.name}
                  className="flex items-baseline gap-3 py-5 border-b border-dotted"
                  style={{ borderColor: C.steel }}
                >
                  <span className="font-mono text-xs shrink-0" style={{ color: C.muted }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <p className={`${display.className} font-bold uppercase text-lg md:text-xl leading-tight`}>
                      {p.name}
                    </p>
                    <p className="text-xs md:text-sm" style={{ color: C.muted }}>
                      {p.desc}
                    </p>
                  </div>
                  <span className="flex-1 border-b border-dotted mx-1 -translate-y-1" style={{ borderColor: C.line }} aria-hidden="true" />
                  <div className="text-right shrink-0">
                    <p className={`${display.className} text-lg md:text-xl font-extrabold`}>
                      {p.price}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: C.muted }}>
                      muestra
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: C.muted }}>
              * Precios de referencia — confirmar valor por WhatsApp
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto: split info | mapa ── */}
      <section id="contacto" className="scroll-mt-20 border-t" style={{ borderColor: C.line, backgroundColor: C.soft }}>
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center px-5 md:px-10 xl:px-16 py-14 md:py-24">
            <Reveal>
              <Eyebrow>N.º 04 — Contacto</Eyebrow>
              <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[0.98] mb-6`}>
                Agenda
                <br />
                <span style={{ color: C.muted }}>tu hora</span>
              </h2>
              <address className="not-italic text-sm md:text-base leading-relaxed mb-2" style={{ color: C.muted }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}, Chile
              </address>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="text-sm md:text-base font-medium mb-8 underline underline-offset-4 decoration-2"
                style={{ color: C.ink, textDecorationColor: C.signal }}
              >
                {BIZ.phoneDisplay}
              </a>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold uppercase tracking-wide text-sm md:text-base px-8 py-4 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95`}
                  style={{ backgroundColor: C.ink, color: '#FFFFFF' }}
                >
                  WhatsApp directo
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold uppercase tracking-wide text-sm md:text-base px-8 py-3 border-2 transition-all hover:bg-black/5 hover:-translate-y-0.5 active:scale-95`}
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Cómo llegar →
                </a>
              </div>
            </Reveal>
          </div>
          <div className="relative min-h-[320px] md:min-h-0 border-t md:border-t-0 md:border-l" style={{ borderColor: C.line }}>
            <iframe
              title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
              src={MAPS_EMBED}
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── CTA final: banda señal ── */}
      <section style={{ backgroundColor: C.signal }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <Reveal>
            <h2 className={`${display.className} font-extrabold uppercase text-[clamp(2.2rem,6vw,4.4rem)] leading-[0.95] tracking-[-0.01em]`} style={{ color: C.ink }}>
              ¿Lista para
              <br />
              agendar?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold uppercase tracking-wide text-base md:text-lg px-8 py-3 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95`}
              style={{ backgroundColor: C.ink, color: C.signal }}
            >
              Escribir por WhatsApp
            </a>
          </Reveal>
        </div>
        <div className="h-[10px]" style={{ background: STRIPE }} aria-hidden="true" />
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
          <div>
            <p className={`${display.className} font-extrabold uppercase text-xl md:text-2xl mb-2`}>
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: C.steel }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: C.steel }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href={BIZ.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.signal }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}: servicios, precios y fotos son de muestra; nombre,
            dirección, WhatsApp e Instagram son reales.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.signal }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
