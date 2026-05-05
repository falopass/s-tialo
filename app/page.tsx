import type { Metadata } from 'next'
import Link from 'next/link'
import { Dot } from '@/components/ui/Dot'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { SecondaryButton } from '@/components/ui/SecondaryButton'
import { StillLifeImage } from '@/components/ui/StillLifeImage'
import { HairlineDivider } from '@/components/ui/HairlineDivider'
import { whatsappLink, emailLink } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Páginas web que sí venden',
  description:
    'Estudio de diseño web para pymes chilenas. Páginas listas en 7 días, desde $79.990. Mobile-first, sin agencia grande.',
  alternates: { canonical: 'https://sitiazo.cl' },
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-[var(--spacing-9)] md:pt-[var(--spacing-10)] pb-[var(--spacing-6)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-7)] lg:gap-[var(--spacing-9)] items-center">
            <div className="flex flex-col justify-center">
              <h1 className="font-display font-bold text-hero text-ink leading-display tracking-display mb-6">
                Páginas web
                <br />
                que sí venden.
                <Dot size="hero" variant="solid-yellow" className="ml-2 inline-block align-middle" />
              </h1>

              <p className="font-body text-lead text-ink-muted leading-body max-w-[var(--prose-max)] mb-8">
                Diseñamos sitios para pymes chilenas que necesitan vender, no impresionar a un jurado.
                Listo en 7 días, desde $79.990.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                <PrimaryButton href="/planes">Ver planes</PrimaryButton>
                <a
                  href={emailLink('Proyecto web')}
                  className="font-body text-body text-ink underline decoration-ink/30 underline-offset-4 hover:text-yellow hover:decoration-yellow transition-colors"
                >
                  hola@sitiazo.cl →
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Dot size="sm" variant="solid-yellow" />
                <span className="font-body text-body-sm text-ink-muted">
                  Diseño web · Curicó, Maule · Chile
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <StillLifeImage
                src="/images/still-lifes/home-hero.png"
                alt="Composición editorial de Sitiazo.cl con smartphone, papeles y punto amarillo"
                aspectRatio="4:5"
                figLabel="fig. 01 — sitiazo home"
                className="max-w-sm lg:max-w-md w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <HairlineDivider />

      {/* ── Para quién ── */}
      <section className="py-[var(--spacing-6)] md:py-[var(--spacing-7)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-7)] lg:gap-[var(--spacing-9)] items-start">
            <div>
              <h2 className="font-display font-bold text-display-xl text-ink leading-display tracking-display mb-4">
                Para quién.
                <Dot size="xl" variant="solid-yellow" />
              </h2>
              <p className="font-body text-lead text-ink-muted leading-body max-w-[var(--prose-max)]">
                Para pymes que necesitan una web clara, rápida y lista para vender.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { num: '01', tag: 'SERVICIOS', title: 'Servicios locales', desc: 'Peluquerías, barberías, estudios, consulta.' },
                { num: '02', tag: 'HECHO A MANO', title: 'Marcas hechas a mano', desc: 'Crochet, regalos, talleres, productos con cariño.' },
                { num: '03', tag: 'COMERCIO', title: 'Comercio pequeño', desc: 'Cafeterías, tiendas, delivery, catálogos simples.' },
              ].map((item) => (
                <div key={item.num} className="border border-border-subtle bg-cream p-5 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-meta text-ink-faded tracking-mono">{item.num}</span>
                    <span className="font-body text-micro uppercase tracking-ui text-ink-faded">{item.tag}</span>
                  </div>
                  <h3 className="font-display font-semibold text-display-sm text-ink leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-body-sm text-ink-muted leading-body mt-auto">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HairlineDivider />

      {/* ── Caso destacado ── */}
      <section className="py-[var(--spacing-6)] md:py-[var(--spacing-7)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-7)] md:gap-[var(--spacing-8)] items-center">
            <div>
              <h2 className="font-display font-bold text-display-lg text-ink leading-display mb-4">
                Caso Roma Crochet.
                <Dot size="lg" variant="solid-yellow" />
              </h2>
              <p className="font-body text-body text-ink-muted leading-body mb-4 max-w-[var(--prose-max)]">
                Una marca artesanal del Maule que pasó de vender por DM a tener su propia web.
                Amigurumis personalizados, hechos a mano en Curicó.
              </p>
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                {['Mobile-first', 'WhatsApp visible', 'Identidad cálida'].map((b) => (
                  <span key={b} className="flex items-center gap-2 font-body text-body-sm text-ink-muted">
                    <Dot size="xs" variant="solid-yellow" />
                    {b}
                  </span>
                ))}
              </div>
              <SecondaryButton href="/casos/roma-crochet">
                Ver caso completo
              </SecondaryButton>
            </div>

            <div className="flex items-center justify-center">
              <StillLifeImage
                src="/images/still-lifes/roma-crochet.png"
                alt="Caso Roma Crochet en smartphone"
                aspectRatio="4:5"
                figLabel="fig. 02 — caso roma crochet"
                className="max-w-sm w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <HairlineDivider />

      {/* ── CTA final ── */}
      <section className="py-[var(--spacing-7)] md:py-[var(--spacing-8)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="max-w-[var(--prose-max)]">
            <h2 className="font-display font-bold text-display-lg text-ink leading-display mb-4">
              ¿Tu pyme es la siguiente?
              <Dot size="lg" variant="solid-yellow" />
            </h2>
            <p className="font-body text-body text-ink-muted leading-body mb-6">
              Conversemos 30 minutos. Sin compromiso, sin venta agresiva.
            </p>
            <PrimaryButton href={whatsappLink('contacto')} external>
              Hablemos por WhatsApp
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  )
}
