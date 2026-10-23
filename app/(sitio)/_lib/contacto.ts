import { CONTACT, cuotas, PAGO_CUOTAS, PAGO_MENSUAL_FORMATTED, PLAN_MENSUAL, PLANS } from '@/lib/config'
import type { PlanId } from '@/lib/config'

/**
 * Llamado principal del sitio: pedir el demo gratis por WhatsApp.
 * Una sola etiqueta para esa intención en todo el sitio (nav, hero, cierre).
 */
export const CTA_DEMO = 'Pide tu demo'

/** Largo máximo del nombre del negocio que escribe el visitante. */
export const MAX_NEGOCIO = 48

/** Deja el nombre del negocio en una sola línea, sin espacios de más y con largo acotado. */
export function limpiarNegocio(texto: string): string {
  return texto.replace(/\s+/g, ' ').trim().slice(0, MAX_NEGOCIO)
}

/** Las tres formas de pago que ofrece el sitio. */
export type Pago = 'unico' | 'cuotas' | 'mensual'

type Contexto = {
  /** Nombre del negocio que escribió el visitante en el hero (si lo escribió). */
  negocio?: string
  /** Demo que el visitante quiere como referencia ("Quiero uno así"). */
  demo?: { nombre: string; rubro: string }
  /** Plan elegido en la página de planes o en el selector. */
  plan?: PlanId
  /** Cómo quiere pagar; si pide mensual fuera del Básico se cae a pago único. */
  pago?: Pago
}

/** Las formas de pago que se ofrecen para un plan: el mensual solo existe en el Básico. */
export function pagosDe(plan: PlanId): Pago[] {
  return plan === PLAN_MENSUAL ? ['unico', 'cuotas', 'mensual'] : ['unico', 'cuotas']
}

/** La forma de pago en una línea visible, con el precio ya resuelto. */
export function textoPago(plan: PlanId, pago: Pago): string {
  if (pago === 'cuotas') {
    const { n, montoFormatted } = cuotas(PLANS[plan].price)
    return `${n} cuotas de ${montoFormatted} sin interés. La primera, cuando te entregamos la web.`
  }
  if (pago === 'mensual') {
    return `${PAGO_MENSUAL_FORMATTED} al mes con hosting y dominio. El primer mes, cuando te entregamos la web.`
  }
  return `${PLANS[plan].priceFormatted} en dos partes: 50% al comenzar y 50% al terminar.`
}

/**
 * Mensaje prellenado de WhatsApp. Con el nombre del negocio o el demo de referencia,
 * Diego sabe qué armar antes de responder.
 */
export function mensajeDemo({ negocio = '', demo, plan, pago = 'unico' }: Contexto = {}): string {
  const n = limpiarNegocio(negocio)
  if (plan) {
    const pagoReal = pago === 'mensual' && plan !== PLAN_MENSUAL ? 'unico' : pago
    const detalle =
      pagoReal === 'cuotas'
        ? `${PAGO_CUOTAS} cuotas de ${cuotas(PLANS[plan].price).montoFormatted} sin interés`
        : pagoReal === 'mensual'
          ? `${PAGO_MENSUAL_FORMATTED} al mes`
          : `${PLANS[plan].priceFormatted}, pago único`
    return `Hola Sitiazo, quiero el plan ${PLANS[plan].name} (${detalle}) para ${n || 'mi negocio'}. Este es el Instagram o la ficha de Google: `
  }
  if (demo) {
    return `Hola Sitiazo, vi el demo de ${demo.nombre} (${demo.rubro.toLocaleLowerCase('es')}) y quiero uno así para ${n || 'mi negocio'}. Este es el Instagram o la ficha de Google: `
  }
  if (n) return `Hola Sitiazo, quiero que me armen un demo de la web de ${n}. Este es el Instagram o la ficha de Google: `
  return 'Hola Sitiazo, quiero que me armen un demo de mi web. Este es el Instagram o la ficha de Google de mi negocio: '
}

export function linkDemo(contexto: Contexto = {}): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(mensajeDemo(contexto))}`
}
