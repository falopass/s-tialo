import { track } from '@vercel/analytics'
import type { PlanId } from '@/lib/config'
import type { Pago } from './contacto'

type DatosWhatsApp = {
  /** Qué CTA llevó al visitante a escribir ('hero', 'nav', 'plan', 'selector', ...). */
  origen: string
  plan?: PlanId
  pago?: Pago
  /** Si el visitante ya escribió el nombre de su negocio en el campo del hero. */
  conNegocio: boolean
}

/** Evento 'whatsapp' en Vercel Analytics: la intención de contacto con su contexto. */
export function medirWhatsApp({ origen, plan, pago, conNegocio }: DatosWhatsApp) {
  track('whatsapp', {
    origen,
    conNegocio,
    ...(plan !== undefined ? { plan } : {}),
    ...(pago !== undefined ? { pago } : {}),
  })
}
