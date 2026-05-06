import type { Metadata } from 'next'
import { Dot } from '@/components/ui/Dot'
import { Accordion } from '@/components/ui/Accordion'
import { HairlineDivider } from '@/components/ui/HairlineDivider'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { whatsappLink } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Preguntas frecuentes',
  description: 'Respuestas claras sobre diseño web, plazos, pagos y mantención.',
  alternates: { canonical: 'https://sitiazo.cl/preguntas-frecuentes/' },
  openGraph: {
    title: 'Preguntas frecuentes | Sitiazo.cl',
    description: 'Respuestas claras sobre diseño web, plazos, pagos y mantención.',
    url: 'https://sitiazo.cl/preguntas-frecuentes/',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Preguntas frecuentes — Sitiazo.cl',
      },
    ],
  },
}

const faqs = [
  {
    question: '¿Cuánto demora?',
    answer: 'Normalmente 7 días hábiles desde que tenemos contenido y feedback.',
  },
  {
    question: '¿Puedo pagar en etapas?',
    answer: 'Sí. 50% para comenzar y 50% al aprobar la página.',
  },
  {
    question: '¿Qué necesito enviarte?',
    answer: 'Fotos, textos y referencias de sitios que te gusten. Si no tienes todo, te ayudamos.',
  },
  {
    question: '¿La página se adapta al celular?',
    answer: '100% mobile-first. Diseñamos primero para celular.',
  },
  {
    question: '¿Después la puedo editar?',
    answer: 'Sí. Te entregamos un manual y soporte para que puedas hacer cambios básicos.',
  },
]

export default function FAQPage() {
  return (
    <>
      <section className="pt-[var(--spacing-9)] md:pt-[var(--spacing-10)] pb-[var(--spacing-6)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-7)] lg:gap-[var(--spacing-9)]">
            <div>
              <h1 className="font-display font-bold text-hero text-ink leading-display tracking-display mb-6">
                Preguntas frecuentes.
                <Dot size="hero" variant="solid-yellow" />
              </h1>
            </div>
            <div className="flex items-start justify-center lg:justify-end">
              {/* Espacio reservado para still life si se agrega en el futuro */}
            </div>
          </div>

          <div className="max-w-[var(--prose-max)] lg:max-w-none lg:w-full mt-8">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      <HairlineDivider />

      <section className="py-[var(--spacing-6)] md:py-[var(--spacing-7)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="max-w-[var(--prose-max)] mx-auto text-center">
            <h2 className="font-display font-bold text-display-md text-ink leading-display mb-4">
              ¿Te quedó alguna duda?
              <Dot size="md" variant="solid-yellow" />
            </h2>
            <PrimaryButton href={whatsappLink('contacto')} external>
              Escríbenos por WhatsApp
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  )
}
