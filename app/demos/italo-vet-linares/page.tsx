import type { Metadata } from 'next'
import Image from 'next/image'
import { Outfit, Manrope } from 'next/font/google'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, STEPS, SERVICES, PRICES } from './content'

const display = Outfit({ subsets: ['latin'], weight: ['500', '700', '800'] })
const body = Manrope({ subsets: ['latin'], weight: ['400', '500', '700'] })

const C = {
  blue: '#2251FF',
  blueDeep: '#0B1E6B',
  lime: '#C6F24E',
  gray: '#EEF0F4',
  ink: '#0E1330',
  muted: '#5A6178',
  line: 'rgba(14,19,48,0.12)',
}

export const metadata: Metadata = {
  title: 'Italo Vet Linares - Veterinario en Linares',
  description:
    'Veterinario en Corporación 840, Linares. Pide hora para tu mascota por WhatsApp.',
  robots: { index: false, follow: false },
}

function WaButton({ children, big = false }: { children: React.ReactNode; big?: boolean }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-bold transition-transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 ${
        big ? 'min-h-[48px] px-6 text-base md:min-h-[60px] md:px-8 md:text-lg' : 'min-h-[48px] px-6 text-base'
      }`}
      style={{ backgroundColor: C.lime, color: C.ink, outlineColor: C.lime }}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  )
}

function Label({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
      style={{ color: dark ? C.lime : C.blue }}
    >
      {children}
    </p>
  )
}

export default function ItaloVetLinaresPage() {
  const h = display.className

  return (
    <div className={body.className} style={{ backgroundColor: '#fff', color: C.ink }}>
      {/* Hero a sangre */}
      <section className="relative min-h-screen flex items-end overflow-hidden" style={{ backgroundColor: C.blueDeep }}>
      <header className="absolute top-0 inset-x-0 z-20">
        <div className="max-w-6xl mx-auto px-5 py-5 flex items-center justify-between gap-4">
          <span className={`${h} text-white text-xl font-extrabold tracking-tight`}>
            Italo<span style={{ color: C.lime }}>Vet</span>
          </span>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center rounded-full px-5 text-sm font-bold bg-white/15 text-white backdrop-blur-md border border-white/30 hover:bg-white/25"
          >
            Pedir hora
          </a>
        </div>
      </header>
        <Image
          src="/demos/italo-vet-linares/hero.webp"
          alt="Box de atención veterinaria con mesa de acero, balanza y luz natural"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(11,30,107,0.6) 0%, rgba(11,30,107,0.7) 45%, ${C.blueDeep} 100%)`,
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto w-full px-5 pb-16 pt-32 md:pb-24">
          <p className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] mb-6" style={{ backgroundColor: C.lime, color: C.ink }}>
            Veterinario · {BIZ.city}
          </p>
          <h1 className={`${h} text-white font-extrabold leading-[0.95] tracking-tight text-[clamp(2.75rem,8vw,6.5rem)] max-w-4xl`}>
            De la consulta a la{' '}
            <span style={{ color: C.lime }}>cola moviéndose</span> otra vez.
          </h1>
          <p className="text-white/85 text-lg md:text-xl mt-6 max-w-xl leading-relaxed">
            Atención veterinaria directa en {BIZ.street}, {BIZ.city}. Escribes, te damos hora y seguimos a tu mascota hasta que vuelve a su ritmo.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-9">
            <WaButton big>Pedir hora por WhatsApp</WaButton>
            <span className="text-white/80 text-sm">
              <strong className="text-white">{BIZ.reviews}</strong> reseñas en Google Maps
            </span>
          </div>
        </div>
      </section>

      {/* Historia por pasos */}
      <section id="pasos" className="py-20 md:py-28" style={{ backgroundColor: C.gray }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <Label>Tu visita, paso a paso · recorrido de ejemplo</Label>
            <h2 className={`${h} font-extrabold tracking-tight text-4xl md:text-6xl leading-[1] max-w-3xl`}>
              Así se mueve una atención en Italo Vet.
            </h2>
          </Reveal>

          <ol className="relative mt-16">
            <span
              className="absolute top-0 bottom-0 left-[23px] md:left-1/2 w-[3px] md:-translate-x-1/2 rounded-full"
              style={{ background: `linear-gradient(${C.blue}, ${C.blue} 80%, ${C.lime})` }}
              aria-hidden="true"
            />
            {STEPS.map((s, i) => {
              const flip = i % 2 === 1
              return (
                <li key={s.n} className="relative pl-16 md:pl-0 pb-16 last:pb-0 md:grid md:grid-cols-2 md:gap-16 md:items-center">
                  <span
                    className={`${h} absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-10 w-[49px] h-[49px] rounded-full flex items-center justify-center font-extrabold text-base border-4`}
                    style={{ backgroundColor: C.lime, color: C.ink, borderColor: C.gray }}
                    aria-hidden="true"
                  >
                    {s.n}
                  </span>
                  <Reveal className={flip ? 'md:order-2' : ''}>
                    <div className="relative aspect-[3/2] rounded-3xl overflow-hidden shadow-[0_24px_60px_-30px_rgba(11,30,107,0.55)]">
                      <Image src={s.img} alt={s.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                    </div>
                  </Reveal>
                  <Reveal delay={120} className={`mt-6 md:mt-0 ${flip ? 'md:order-1 md:text-right' : ''}`}>
                    <p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: C.blue }}>
                      Paso {s.n} · {s.kicker}
                    </p>
                    <h3 className={`${h} font-bold text-2xl md:text-4xl tracking-tight leading-tight mt-3`}>{s.title}</h3>
                    <p className={`mt-4 text-base md:text-lg leading-relaxed max-w-md ${flip ? 'md:ml-auto' : ''}`} style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <Label>Servicios · texto de ejemplo</Label>
            <h2 className={`${h} font-extrabold tracking-tight text-4xl md:text-5xl leading-[1.02] max-w-2xl`}>
              Lo que resolvemos en la clínica.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {SERVICES.map((s, i) => (
              <Reveal key={s.name} delay={i * 100}>
                <article className="group h-full rounded-3xl overflow-hidden border" style={{ borderColor: C.line }}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={s.img} alt={s.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className={`${h} absolute top-4 left-4 rounded-full px-3 py-1 text-sm font-bold`} style={{ backgroundColor: C.blue, color: '#fff' }}>
                      0{i + 1}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className={`${h} font-bold text-xl`}>{s.name}</h3>
                    <p className="mt-2 leading-relaxed" style={{ color: C.muted }}>{s.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre el negocio */}
      <section id="nosotros" className="py-20 md:py-28 text-white" style={{ backgroundColor: C.blue }}>
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <Label dark>Linares · atención directa</Label>
            <h2 className={`${h} font-extrabold tracking-tight text-4xl md:text-5xl leading-[1.02]`}>
              Un veterinario de barrio, con resultados que se notan.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/85 max-w-lg">
              En {BIZ.street} atiendes directo con quien revisa a tu mascota: sin call center ni esperas eternas. Por eso {BIZ.reviews} personas han dejado su reseña en Google Maps y más de {BIZ.followers} siguen la clínica en Facebook.
            </p>
            <dl className="grid grid-cols-2 gap-4 mt-10 max-w-md">
              <div className="rounded-2xl p-5" style={{ backgroundColor: C.blueDeep }}>
                <dt className="text-sm text-white/70">Reseñas en Google</dt>
                <dd className={`${h} text-4xl font-extrabold mt-1`} style={{ color: C.lime }}>{BIZ.reviews}</dd>
              </div>
              <div className="rounded-2xl p-5" style={{ backgroundColor: C.blueDeep }}>
                <dt className="text-sm text-white/70">Seguidores en Facebook</dt>
                <dd className={`${h} text-4xl font-extrabold mt-1`} style={{ color: C.lime }}>{BIZ.followers}</dd>
              </div>
            </dl>
            <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 text-sm font-bold underline underline-offset-4 hover:text-[#C6F24E]">
              Ver la página en Facebook
            </a>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative aspect-[4/5] md:aspect-[4/5] rounded-[2rem] overflow-hidden">
              <Image src="/demos/italo-vet-linares/detalle3.webp" alt="Recepción con mesón de madera, plantas y banca de espera" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Precios de referencia */}
      <section id="precios" className="py-20 md:py-28" style={{ backgroundColor: C.gray }}>
        <div className="max-w-3xl mx-auto px-5">
          <Reveal>
            <Label>Precios de referencia · muestra</Label>
            <h2 className={`${h} font-extrabold tracking-tight text-4xl md:text-5xl leading-[1.02]`}>
              Valores claros antes de venir.
            </h2>
            <p className="mt-4" style={{ color: C.muted }}>
              Lista de muestra: los valores reales los publica la clínica. Mientras tanto, consúltalos por WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-10 rounded-3xl bg-white divide-y" style={{ borderColor: C.line }}>
              {PRICES.map((p) => (
                <li key={p} className="flex items-center justify-between gap-4 px-6 py-5" style={{ borderColor: C.line }}>
                  <span className="font-medium">{p}</span>
                  <span className={`${h} font-bold text-sm rounded-full px-3 py-1`} style={{ backgroundColor: C.gray, color: C.blue }}>
                    $ por confirmar
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Contacto y ubicación */}
      <section id="contacto" className="py-20 md:py-28 text-white" style={{ backgroundColor: C.blueDeep }}>
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <Label dark>Contacto</Label>
            <h2 className={`${h} font-extrabold tracking-tight text-4xl md:text-6xl leading-[0.98]`}>
              ¿Tu mascota necesita hora? <span style={{ color: C.lime }}>Escríbenos.</span>
            </h2>
            <div className="mt-9">
              <WaButton big>WhatsApp {BIZ.phoneDisplay}</WaButton>
            </div>
            <address className="not-italic mt-10 text-lg leading-relaxed text-white/85">
              <strong className="block text-white">{BIZ.name}</strong>
              {BIZ.address}
            </address>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm font-bold underline underline-offset-4 hover:text-[#C6F24E]">
              Cómo llegar en Google Maps
            </a>
          </Reveal>
          <Reveal delay={150}>
            <div className="rounded-3xl overflow-hidden aspect-[4/3] border-4" style={{ borderColor: C.lime }}>
              <iframe
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}`}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Franja Sitiazo */}
      <div className="py-4 px-5 text-center text-sm font-bold" style={{ backgroundColor: C.lime, color: C.ink }}>
        Mockup preparado por{' '}
        <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Sitiazo</a>{' '}
        para {BIZ.name}: textos de servicios y precios son de muestra.{' '}
        <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">¿Lo hacemos realidad?</a>
      </div>

      <footer className="pt-8 pb-24 px-5 text-center text-xs" style={{ color: C.muted }}>
        {BIZ.name} · {BIZ.address}
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
