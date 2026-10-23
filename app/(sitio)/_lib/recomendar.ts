import type { PlanId } from '@/lib/config'
import type { Pago } from './contacto'

export type Respuestas = {
  /** Qué necesita mostrar en su web. */
  mostrar?: 'pagina' | 'secciones' | 'productos'
  /** Si quiere aparecer en Google cuando busquen su rubro en su comuna. */
  google?: boolean
  /** Cómo prefiere pagar. */
  pago?: Pago
}

export type Recomendacion = {
  plan: PlanId
  pago: Pago
  razones: string[]
  nota?: string
}

// shortcut: las razones salen de PLANS.*.features y deliveryDays en lib/config.ts; se repiten
// aquí como texto porque este módulo no puede importar valores (corre bajo node --experimental-strip-types).
const RAZONES: Record<PlanId, string[]> = {
  basico: ['Una página con botón directo a WhatsApp.', 'Lista en 7 días hábiles.'],
  recomendado: [
    'Hasta 5 secciones y blog integrado.',
    'Incluye SEO local para aparecer cuando buscan tu rubro en tu comuna.',
    'Lista en 10 días hábiles.',
  ],
  catalogo: [
    'Fichas con foto y precio, filtros y búsqueda para hasta 10 productos o servicios.',
    'Agenda en línea con Cal.com.',
    'Lista en 14 días hábiles.',
  ],
}

/**
 * Recomienda un plan según tres respuestas. Sin respuesta a "qué mostrar" no hay
 * recomendación (null): es la única pregunta que define el plan.
 */
export function recomendarPlan(r: Respuestas): Recomendacion | null {
  if (!r.mostrar) return null

  let plan: PlanId = r.mostrar === 'pagina' ? 'basico' : r.mostrar === 'secciones' ? 'recomendado' : 'catalogo'
  if (r.google === true && plan === 'basico') plan = 'recomendado'

  let pago: Pago = r.pago ?? 'unico'
  let nota: string | undefined
  if (pago === 'mensual' && plan !== 'basico') {
    pago = 'cuotas'
    // shortcut: "3 cuotas" es PAGO_CUOTAS en lib/config.ts; el texto queda fijo aquí (no hay imports).
    nota = 'El pago mensual es solo para el plan Básico; este plan lo puedes pagar en 3 cuotas sin interés.'
  }

  return { plan, pago, razones: RAZONES[plan], nota }
}
