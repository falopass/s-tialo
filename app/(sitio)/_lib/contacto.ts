import { CONTACT } from '@/lib/config'

/**
 * Llamado principal del sitio: pedir el demo gratis por WhatsApp.
 * Una sola etiqueta para esa intención en todo el sitio (nav, hero, cierre).
 */
export const CTA_DEMO = 'Pide tu demo'

const MENSAJE_DEMO =
  'Hola Sitiazo, quiero que me armen un demo de mi web. Este es el Instagram o la ficha de Google de mi negocio: '

export function linkDemo(): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(MENSAJE_DEMO)}`
}
