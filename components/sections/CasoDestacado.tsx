import { SectionCounter } from '@/components/ui/SectionCounter'
import { Dot } from '@/components/ui/Dot'
import { Tag } from '@/components/ui/Tag'
import { BulletList } from '@/components/ui/BulletList'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { StillLifePlaceholder } from '@/components/ui/StillLifePlaceholder'
import { FooterBar } from '@/components/layout/FooterBar'

export function CasoDestacado() {
  return (
    <section className="py-[var(--spacing-11)] md:py-[var(--spacing-12)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
        <SectionCounter current={4} total={6} className="mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-9)] lg:gap-[var(--spacing-10)]">
          {/* Left: Text */}
          <div className="flex flex-col justify-center">
            <Tag variant="yellow" className="mb-4">
              CASO DESTACADO
            </Tag>

            <h2 className="font-display font-bold text-display-lg text-ink leading-display tracking-display mb-6">
              Caso Roma Crochet.
              <Dot size="lg" variant="solid-yellow" />
            </h2>

            <p className="font-body text-lead text-ink-muted leading-body max-w-[var(--prose-max)] mb-6">
              Una marca artesanal del Maule que pasó de vender solo por DM a tener su propia web.
              Amigurumis personalizados, hechos a mano en Curicó.
            </p>

            <BulletList
              items={[
                '100% mobile-first — sus clientas compran desde el celular',
                'WhatsApp visible en cada página como checkout',
                'Identidad cálida que refleja lo hecho a mano',
              ]}
              className="mb-6"
            />

            <PrimaryButton href="/casos/roma-crochet">
              Ver caso completo →
            </PrimaryButton>
          </div>

          {/* Right: Still-life */}
          <div className="flex items-center justify-center">
            <StillLifePlaceholder
              aspectRatio="16:10"
              figLabel="fig. 02 — romacrochet.cl"
              className="max-w-lg lg:max-w-none"
            />
          </div>
        </div>
      </div>

      <FooterBar />
    </section>
  )
}
