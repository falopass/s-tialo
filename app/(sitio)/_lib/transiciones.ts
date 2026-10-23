/**
 * Transiciones entre páginas del sitio con la View Transitions API.
 * Qué comunica: cambiar de página es pasar de una etapa a otra; la nav (el estudio) se queda quieta.
 *
 * Solo se disparan desde el sitio y con el tipo "sitio", así su CSS (html:active-view-transition-type(sitio))
 * nunca aplica a un demo. Sin soporte de tipos o con movimiento reducido, la navegación es normal.
 */

type DocumentoConTransiciones = Document & {
  startViewTransition: (opciones: { update: () => Promise<void>; types: string[] }) => unknown
}

let pendiente: (() => void) | null = null

/** Lo llama el layout cuando la ruta nueva ya se pintó. */
export function terminarTransicion() {
  pendiente?.()
  pendiente = null
}

export function navegarConTransicion(navegar: () => void): boolean {
  if (typeof window === 'undefined') return false
  if (!('startViewTransition' in document) || !('ViewTransitionTypeSet' in window)) return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false

  ;(document as DocumentoConTransiciones).startViewTransition({
    types: ['sitio'],
    update: () =>
      new Promise<void>((resolver) => {
        pendiente = resolver
        navegar()
        // Si la ruta tarda, no se deja la página congelada esperando.
        window.setTimeout(() => {
          if (pendiente === resolver) terminarTransicion()
        }, 1200)
      }),
  })
  return true
}
