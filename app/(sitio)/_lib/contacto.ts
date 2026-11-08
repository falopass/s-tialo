import {
  ACTIVACION_FORMATTED,
  COMPRA_BASICO,
  COMPRA_BASICO_FORMATTED,
  CONTACT,
  cuotas,
  MESES_PAGADOS_ANUAL,
  OFERTA_ACTIVACION_FECHA,
  ofertaActivacionVigente,
  PAGO_CUOTAS,
  PLAN_COMPRA,
  PLANS,
  RENOVACION_ANUAL_FORMATTED,
} from '@/lib/config'
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

/** Las tres formas de pago que ofrece el sitio. La compra única admite cuotas. */
export type Pago = 'mensual' | 'anual' | 'unico'

type Contexto = {
  /** Nombre del negocio que escribió el visitante en el hero (si lo escribió). */
  negocio?: string
  /** Demo que el visitante quiere como referencia ("Quiero uno así"). */
  demo?: { nombre: string; rubro: string }
  /** Plan elegido en la página de planes o en el selector. */
  plan?: PlanId
  /** Cómo quiere pagar; si pide compra única fuera del Básico se cae a anual. */
  pago?: Pago
}

/** Las formas de pago que se ofrecen para un plan: la compra única solo existe en el Básico. */
export function pagosDe(plan: PlanId): Pago[] {
  return plan === PLAN_COMPRA ? ['mensual', 'anual', 'unico'] : ['mensual', 'anual']
}

/**
 * La forma de pago en una línea visible, con el precio ya resuelto. `oferta` dice si rige la
 * activación gratis; en componentes que se pintan en el build, pásalo desde `useOfertaVigente`.
 */
export function textoPago(plan: PlanId, pago: Pago, oferta: boolean = ofertaActivacionVigente()): string {
  const p = PLANS[plan]
  if (pago === 'anual') {
    return `${p.annualFormatted} por 12 meses: pagas ${MESES_PAGADOS_ANUAL} y sin activación. Se paga cuando te entregamos la web.`
  }
  if (pago === 'unico' && plan === PLAN_COMPRA) {
    const { n, montoFormatted } = cuotas(COMPRA_BASICO)
    return `${COMPRA_BASICO_FORMATTED}: 50% al comenzar y 50% al terminar, o ${n} cuotas de ${montoFormatted} sin interés. Desde el segundo año, ${RENOVACION_ANUAL_FORMATTED} al año.`
  }
  const activacion = oferta
    ? `activación gratis hasta el ${OFERTA_ACTIVACION_FECHA} (normal ${ACTIVACION_FORMATTED})`
    : `más ${ACTIVACION_FORMATTED} de activación`
  return `${p.priceFormatted} al mes con hosting, dominio y ajustes incluidos, ${activacion}. Sin permanencia.`
}

/** El precio principal a mostrar según la forma de pago elegida. */
export function precioPrincipal(plan: PlanId, pago: Pago): string {
  const p = PLANS[plan]
  if (pago === 'anual') return `${p.annualFormatted} al año`
  if (pago === 'unico' && plan === PLAN_COMPRA) return COMPRA_BASICO_FORMATTED
  return `${p.priceFormatted} al mes`
}

/** La forma de pago real para un plan: la compra única fuera del Básico se cae a anual. */
export function pagoValido(plan: PlanId, pago: Pago): Pago {
  return pago === 'unico' && plan !== PLAN_COMPRA ? 'anual' : pago
}

/**
 * Mensaje prellenado de WhatsApp. Con el nombre del negocio o el demo de referencia,
 * Diego sabe qué armar antes de responder.
 */
export function mensajeDemo({ negocio = '', demo, plan, pago = 'mensual' }: Contexto = {}): string {
  const n = limpiarNegocio(negocio)
  if (plan) {
    const pagoReal = pagoValido(plan, pago)
    const detalle =
      pagoReal === 'anual'
        ? `${PLANS[plan].annualFormatted} al año`
        : pagoReal === 'unico'
          ? `compra única de ${COMPRA_BASICO_FORMATTED}, hasta ${PAGO_CUOTAS} cuotas`
          : `${PLANS[plan].priceFormatted} al mes`
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
