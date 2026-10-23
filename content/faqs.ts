/**
 * content/faqs.ts
 *
 * Preguntas frecuentes reutilizables en todo el sitio.
 * Cada FAQ tiene un ID único para evitar duplicación.
 */

import { PAGO_MENSUAL_FORMATTED, STARTING_PRICE, PAGO_CUOTAS, HOSTING_PRICE, formatCLP } from '@/lib/config'

export interface FAQ {
  id: string
  question: string
  answer: string
}

export const planFaqs: FAQ[] = [
  {
    id: 'plan-mensual',
    question: '¿Puedo pagar mes a mes?',
    answer: `Sí. El plan mensual son ${PAGO_MENSUAL_FORMATTED} al mes (el primer mes se paga al activar) e incluye hosting, dominio y los ajustes de contenido que necesites. Si prefieres pagar una sola vez, está el pago único desde ${STARTING_PRICE}, con tarjeta de crédito en ${PAGO_CUOTAS} cuotas.`,
  },
  {
    id: 'plan-barato',
    question: '¿Por qué tan barato?',
    answer:
      'Somos un estudio chico en Curicó, sin oficina ni estructura de agencia grande. El ahorro se va directo a tu web.',
  },
  {
    id: 'plan-hosting',
    question: '¿Qué incluye el hosting?',
    answer: `Con el pago único, el hosting cuesta ${formatCLP(HOSTING_PRICE)} al mes. Con el plan mensual de ${PAGO_MENSUAL_FORMATTED} el hosting y el dominio van incluidos. Puedes usar tu dominio actual o te ayudamos a comprar uno.`,
  },
  {
    id: 'plan-cambiar',
    question: '¿Y si quiero cambiar después?',
    answer:
      'Empiezas con el plan que necesitas hoy. Si tu negocio crece, migramos sin problema al siguiente plan pagando la diferencia.',
  },
  {
    id: 'plan-tiendas',
    question: '¿Hacen tiendas online?',
    answer:
      'Para ecommerce completo (carrito, pasarela de pago) recomendamos plataformas especializadas. Nuestro plan Catálogo funciona como vidriera con checkout por WhatsApp.',
  },
]

export const contactFaqs: FAQ[] = [
  {
    id: 'contacto-demora',
    question: '¿Cuánto demora la respuesta?',
    answer:
      'WhatsApp: en horas. Email: en 24 horas laborales. Llamada por Cal.com: agenda directo según disponibilidad.',
  },
  {
    id: 'contacto-fuera-maule',
    question: '¿Atienden fuera del Maule?',
    answer:
      'Sí, todo Chile. El proceso es 100% online: el demo, los cambios y la publicación se coordinan por WhatsApp.',
  },
  {
    id: 'contacto-presupuesto',
    question: '¿Hacen presupuesto sin compromiso?',
    answer:
      'Sí. Conversamos 30 min, te mando propuesta clara en 24 hrs. Si no te tinca, todo bien. Sin venta agresiva, sin follow-ups molestos.',
  },
]

export const generalFaqs: FAQ[] = [
  {
    id: 'general-demora',
    question: '¿Cuánto demora?',
    answer:
      'Normalmente 7 días hábiles desde que tenemos contenido y feedback.',
  },
  {
    id: 'general-pago-etapas',
    question: '¿Puedo pagar en etapas?',
    answer: `Sí. Puedes pagar mes a mes (${PAGO_MENSUAL_FORMATTED}, el primer mes al activar) o hacer un pago único con tarjeta de crédito en ${PAGO_CUOTAS} cuotas.`,
  },
  {
    id: 'general-contenido',
    question: '¿Qué necesito enviarte?',
    answer:
      'Fotos, textos y referencias de sitios que te gusten. Si no tienes todo, te ayudamos.',
  },
  {
    id: 'general-mobile',
    question: '¿La página se adapta al celular?',
    answer: '100% mobile-first. Diseñamos primero para celular.',
  },
  {
    id: 'general-editar',
    question: '¿Después la puedo editar?',
    answer:
      'Sí. Te entregamos un manual y soporte para que puedas hacer cambios básicos.',
  },
]

/**
 * Genera JSON-LD para FAQPage schema.
 */
export function faqJsonLd(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
