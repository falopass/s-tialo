import type { Metadata } from 'next'
import { Dot } from '@/components/ui/Dot'
import { Tag } from '@/components/ui/Tag'
import { BulletList } from '@/components/ui/BulletList'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { SecondaryButton } from '@/components/ui/SecondaryButton'
import { StillLifePlaceholder } from '@/components/ui/StillLifePlaceholder'
import { FooterBar } from '@/components/layout/FooterBar'
import { HairlineDivider } from '@/components/ui/HairlineDivider'
import { whatsappLink } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Caso Roma Crochet',
  description:
    'Cómo Roma Crochet, una marca artesanal del Maule, pasó de vender por DM a tener su propia web profesional. Caso real de Sitiazo.cl.',
  alternates: {
    canonical: 'https://sitiazo.cl/casos/roma-crochet/',
  },
}

export default function RomaCrochetPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[var(--spacing-9)] md:pt-[var(--spacing-11)] pb-[var(--spacing-10)] md:pb-[var(--spacing-12)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <Tag variant="yellow" className="mb-8">CASO · 2026</Tag>

          <Tag variant="yellow" className="mb-6">
            CASO DESTACADO
          </Tag>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-9)] lg:gap-[var(--spacing-10)]">
            <div className="flex flex-col justify-center">
              <h1 className="font-display font-bold text-hero text-ink leading-display tracking-display mb-6">
                Caso Roma<br />Crochet.<Dot size="hero" variant="solid-yellow" />
              </h1>

              <p className="font-body text-lead text-ink-muted leading-body max-w-[var(--prose-max)] mb-6">
                Una marca artesanal del Maule que pasó de vender solo por DM de Instagram a tener
                su propia web profesional. Amigurumis personalizados, hechos a mano en Curicó.
              </p>

              <BulletList
                items={[
                  '100% mobile-first — sus clientas compran desde el celular',
                  'WhatsApp visible en cada página como checkout principal',
                  'Identidad cálida que refleja el trabajo hecho a mano en el Maule',
                ]}
                className="mb-8"
              />

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <PrimaryButton href={whatsappLink('contacto')} external>
                  ¿Quieres tu caso así? →
                </PrimaryButton>
                <SecondaryButton href="https://romacrochet.cl" external>
                  Visitar romacrochet.cl →
                </SecondaryButton>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <StillLifePlaceholder
                aspectRatio="16:10"
                figLabel="fig. 02 — romacrochet.cl"
                className="max-w-lg lg:max-w-none w-full"
              />
            </div>
          </div>
        </div>

        <FooterBar />
      </section>

      <HairlineDivider />

      {/* El Proceso */}
      <section className="py-[var(--spacing-11)] md:py-[var(--spacing-12)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <h2 className="font-display font-bold text-display-lg text-ink leading-display tracking-display mb-12">
            El proceso.<Dot size="lg" variant="solid-yellow" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-border-subtle p-[var(--spacing-6)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-display-sm text-ink-faded">01</span>
                <Dot size="sm" variant="solid-yellow" />
              </div>
              <h3 className="font-display font-semibold text-display-sm text-ink mb-3">
                El brief.
              </h3>
              <p className="font-body text-body text-ink-muted leading-body">
                Roma necesitaba una web que mostrara sus amigurumis personalizados y facilitara los pedidos
                por WhatsApp. Su público: mujeres jóvenes de todo Chile que compran regalos únicos y hechos a mano.
              </p>
            </div>

            <div className="border border-border-subtle p-[var(--spacing-6)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-display-sm text-ink-faded">02</span>
                <Dot size="sm" variant="solid-yellow" />
              </div>
              <h3 className="font-display font-semibold text-display-sm text-ink mb-3">
                El diseño.
              </h3>
              <p className="font-body text-body text-ink-muted leading-body">
                Paleta cálida (rosa coral + crema) con texturas de punto. Cada amigurumi tiene su propia
                tarjeta con foto grande, nombre, precio y botón directo de WhatsApp para pedir.
              </p>
            </div>

            <div className="border border-border-subtle p-[var(--spacing-6)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-display-sm text-ink-faded">03</span>
                <Dot size="sm" variant="solid-yellow" />
              </div>
              <h3 className="font-display font-semibold text-display-sm text-ink mb-3">
                El resultado.
              </h3>
              <p className="font-body text-body text-ink-muted leading-body">
                Página publicada en 7 días. WhatsApp integrado como checkout. Google empieza a indexar.
                Roma comparte su web con orgullo en sus historias de Instagram.
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="max-w-[var(--prose-max)] text-center">
              <h3 className="font-display font-bold text-display-md text-ink mb-4">
                ¿Quieres tu caso así?<Dot size="lg" variant="solid-yellow" />
              </h3>
              <p className="font-body text-body text-ink-muted mb-6">
                Cuéntanos tu proyecto. 30 minutos sin compromiso.
              </p>
              <PrimaryButton href={whatsappLink('contacto')} external>
                Hablemos →
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
