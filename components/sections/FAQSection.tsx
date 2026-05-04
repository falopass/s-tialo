'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionCounter } from '@/components/ui/SectionCounter'
import { Dot } from '@/components/ui/Dot'
import { StillLifePlaceholder } from '@/components/ui/StillLifePlaceholder'

const faqs = [
  {
    question: '¿Cuánto demora tener mi página lista?',
    answer:
      'Depende del plan. El plan Básico está listo en 5 días. El plan Recomendado en 7 días. El plan Catálogo en 10 días. Cada plazo es desde que abonas el 50% y tenemos todo el contenido listo.',
  },
  {
    question: '¿Puedo pagar en etapas?',
    answer:
      'Sí. El 50% para comenzar y el 50% restante cuando la página está lista y aprobada. Sin letras chicas, sin cuotas escondidas, sin intereses.',
  },
  {
    question: '¿Qué necesito enviarte para comenzar?',
    answer:
      'Fotos de tu negocio o productos, el texto que quieres que aparezca, tu logo si tienes uno, y referencias de páginas que te gusten. Si no tienes todo listo, te ayudo a armarlo en la llamada de brief.',
  },
  {
    question: '¿La página se adapta al celular?',
    answer:
      '100%. Todas nuestras páginas son mobile-first. De hecho, las diseñamos pensando primero en el celular y después en el escritorio. El 80% de tus clientes te van a ver desde el teléfono.',
  },
  {
    question: '¿Después la puedo editar yo mismo?',
    answer:
      'Sí, te entrego un manual de uso. Pero también incluyo soporte los primeros 30 días por WhatsApp para cualquier cambio. Si necesitas mantención mensual después, la conversamos.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-[var(--spacing-11)] md:py-[var(--spacing-12)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
        <SectionCounter current={6} total={6} className="mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-9)] lg:gap-[var(--spacing-10)]">
          {/* Left: Image */}
          <div>
            <StillLifePlaceholder
              aspectRatio="4:5"
              figLabel="fig. 03 — sketch"
              className="max-w-sm"
            />
          </div>

          {/* Right: FAQ */}
          <div>
            <h2 className="font-display font-bold text-display-lg text-ink leading-display tracking-display mb-12">
              Preguntas frecuentes.
              <Dot size="lg" variant="solid-yellow" />
            </h2>

            <div className="space-y-0">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-divider">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <span className="font-body text-body text-ink font-medium group-hover:text-ink-muted transition-colors pr-4">
                      {faq.question}
                    </span>
                    <span className="text-ink-muted text-xl shrink-0 transition-transform duration-300">
                      {openIndex === i ? '−' : '+'}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="font-body text-body text-ink-muted leading-body pb-5 max-w-[var(--prose-max)]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
