/**
 * content/faqs.ts
 *
 * Preguntas frecuentes reutilizables en todo el sitio.
 * Cada FAQ tiene un ID único para evitar duplicación.
 */

import {
  ACTIVACION_FORMATTED,
  COMPRA_BASICO_FORMATTED,
  MESES_PAGADOS_ANUAL,
  PAGO_CUOTAS,
  RENOVACION_ANUAL_FORMATTED,
  STARTING_PRICE,
} from '@/lib/config'

export interface FAQ {
  id: string
  question: string
  answer: string
}

export const planFaqs: FAQ[] = [
  {
    id: 'plan-mensual',
    question: '¿Puedo pagar mes a mes?',
    answer: `Sí, todos los planes van mes a mes: desde ${STARTING_PRICE}, con hosting, dominio y los ajustes de contenido que necesites. Al comenzar se paga una activación de ${ACTIVACION_FORMATTED} y el primer mes se paga cuando te entregamos la web. No hay permanencia: si te vas, avisas con 30 días. Si pagas el año completo, son 12 meses por el precio de ${MESES_PAGADOS_ANUAL} y sin activación.`,
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
    answer: `En la mensualidad, el hosting y el dominio van incluidos. Si prefieres comprar el plan Básico (${COMPRA_BASICO_FORMATTED}, en hasta ${PAGO_CUOTAS} cuotas sin interés), desde el segundo año se pagan ${RENOVACION_ANUAL_FORMATTED} al año por hosting, dominio y soporte. Puedes usar tu dominio actual o te ayudamos a comprar uno.`,
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
      'Por WhatsApp respondemos en horas hábiles.',
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
    answer: `Sí. En la mensualidad pagas la activación de ${ACTIVACION_FORMATTED} al comenzar y el primer mes cuando te entregamos la web. Si compras el plan Básico, pagas 50% para comenzar y 50% al terminar, o en hasta ${PAGO_CUOTAS} cuotas sin interés.`,
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
