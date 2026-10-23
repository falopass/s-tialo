import { CONTACT } from '@/lib/config'

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

type Contexto = {
  /** Nombre del negocio que escribió el visitante en el hero (si lo escribió). */
  negocio?: string
  /** Demo que el visitante quiere como referencia ("Quiero uno así"). */
  demo?: { nombre: string; rubro: string }
}

/**
 * Mensaje prellenado de WhatsApp. Con el nombre del negocio o el demo de referencia,
 * Diego sabe qué armar antes de responder.
 */
export function mensajeDemo({ negocio = '', demo }: Contexto = {}): string {
  const n = limpiarNegocio(negocio)
  if (demo) {
    return `Hola Sitiazo, vi el demo de ${demo.nombre} (${demo.rubro.toLocaleLowerCase('es')}) y quiero uno así para ${n || 'mi negocio'}. Este es el Instagram o la ficha de Google: `
  }
  if (n) return `Hola Sitiazo, quiero que me armen un demo de la web de ${n}. Este es el Instagram o la ficha de Google: `
  return 'Hola Sitiazo, quiero que me armen un demo de mi web. Este es el Instagram o la ficha de Google de mi negocio: '
}

export function linkDemo(contexto: Contexto = {}): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(mensajeDemo(contexto))}`
}
