import type { Metadata } from 'next'
import { Dot } from '@/components/ui/Dot'
import { Tag } from '@/components/ui/Tag'
import { BulletList } from '@/components/ui/BulletList'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { StillLifePlaceholder } from '@/components/ui/StillLifePlaceholder'
import { FooterBar } from '@/components/layout/FooterBar'
import { HairlineDivider } from '@/components/ui/HairlineDivider'
import { whatsappLink } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description:
    'Sitiazo es un estudio independiente de diseño web basado en el Maule. Hacemos páginas que venden, no que impresionan.',
  alternates: {
    canonical: 'https://sitiazo.cl/sobre/',
  },
}

const creencias = [
  'Las pymes merecen webs profesionales sin pagar precios de agencia grande.',
  'Mobile-first no es opcional — el 80% de tus clientes te ve desde el celular.',
  'WhatsApp es el mejor checkout para Chile. Punto.',
  'Una web rápida y clara vende más que una llena de animaciones.',
]

const stack = [
  { area: 'Frontend', tools: 'Next.js · React · Tailwind v4' },
  { area: 'Hosting', tools: 'Vercel · Cloudflare · sin sorpresas en la cuenta' },
  { area: 'Integraciones', tools: 'WhatsApp Business · Cal.com · MercadoPago · Schema.org' },
]

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[var(--spacing-9)] md:pt-[var(--spacing-11)] pb-[var(--spacing-10)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <Tag variant="outline" className="mb-8">SOBRE SITIAZO · 2026</Tag>

          <div className="max-w-[var(--prose-max)] mb-16">
            <h1 className="font-display font-bold text-hero text-ink leading-display tracking-display mb-6">
              Un estudio chico<br />
              que diseña<br />
              para pymes<br />
              chilenas.<Dot size="hero" variant="solid-yellow" />
            </h1>
            <p className="font-body text-lead text-ink-muted leading-body">
              Sitiazo es un estudio independiente de diseño web basado en el Maule.
              Hacemos páginas que venden, no que impresionan.
            </p>
          </div>
        </div>
      </section>

      <FooterBar />
      <HairlineDivider />

      {/* Lo que creemos */}
      <section className="py-[var(--spacing-11)] md:py-[var(--spacing-12)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="max-w-[var(--prose-max)]">
            <h2 className="font-display font-bold text-display-lg text-ink leading-display tracking-display mb-8">
              Lo que creemos.<Dot size="lg" variant="solid-yellow" />
            </h2>
            <BulletList items={creencias} />
          </div>
        </div>
      </section>

      <HairlineDivider />

      {/* Detrás — Diego */}
      <section className="py-[var(--spacing-11)] md:py-[var(--spacing-12)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-9)] items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display italic text-meta text-ink-faded tracking-ui">
                  fig. 01 — fundador
                </span>
                <Dot size="xs" variant="solid-yellow" />
              </div>
              <h2 className="font-display font-bold text-display-lg text-ink leading-display mb-6">
                Diego.<Dot size="lg" variant="solid-yellow" />
              </h2>
              <p className="font-body text-body text-ink-muted leading-body mb-6 max-w-[var(--prose-max)]">
                Soy estudiante de ingeniería informática en la Universidad de Talca y fundador de Sitiazo.
                Construyo webs para pymes desde 2024. Antes hice CVListo (cvlisto.cl), QuizVerse
                (quizverse.org) y CalculadoraChile (calculadorachile.cl). Vivo en el Maule. Me gusta
                el café cargado y resolver problemas con el mínimo de código posible.
              </p>
              <p className="font-body text-body-sm text-ink-muted">
                diego@sitiazo.cl · Curicó, Chile
              </p>
            </div>
            <div>
              <StillLifePlaceholder
                aspectRatio="1:1"
                figLabel="fig. 02 — estudio"
                className="max-w-sm mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <FooterBar />
      <HairlineDivider />

      {/* Cómo construimos */}
      <section className="py-[var(--spacing-11)] md:py-[var(--spacing-12)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <h2 className="font-display font-bold text-display-lg text-ink leading-display tracking-display mb-12">
            Cómo construimos.<Dot size="lg" variant="solid-yellow" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stack.map((item) => (
              <div key={item.area} className="border border-border-subtle p-[var(--spacing-6)]">
                <Tag variant="yellow" className="mb-4">{item.area}</Tag>
                <p className="font-body text-body text-ink leading-body">{item.tools}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HairlineDivider />

      {/* Por qué nos llamamos así */}
      <section className="py-[var(--spacing-11)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="max-w-[var(--prose-max)]">
            <h2 className="font-display font-bold text-display-lg text-ink leading-display tracking-display mb-8">
              Por qué nos llamamos así.<Dot size="lg" variant="solid-yellow" />
            </h2>
            <p className="font-body text-body text-ink-muted leading-body">
              &ldquo;Sitiazo&rdquo; es la versión chilena de &ldquo;sitio + azo&rdquo;. Como decir
              &ldquo;partidazo&rdquo;, &ldquo;asadazo&rdquo;, &ldquo;golazo&rdquo;. Un sitiazo es
              una web que la rompe — bien hecha, sin enredos, que cumple lo que promete. Eso es lo
              que entregamos.
            </p>
          </div>
        </div>
      </section>

      <HairlineDivider />

      {/* CTA final */}
      <section className="py-[var(--spacing-12)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="max-w-[var(--prose-max)] mx-auto text-center">
            <h2 className="font-display font-bold text-display-xl text-ink leading-display mb-4">
              ¿Conversamos?<Dot size="xl" variant="solid-yellow" />
            </h2>
            <p className="font-body text-body text-ink-muted leading-body mb-8">
              30 minutos. WhatsApp o Meet. Sin compromiso.
            </p>
            <PrimaryButton href={whatsappLink('contacto')} external>
              Hablemos →
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  )
}
