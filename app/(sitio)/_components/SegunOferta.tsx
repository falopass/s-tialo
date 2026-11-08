'use client'

import { useSyncExternalStore } from 'react'
import { OFERTA_ACTIVACION_HASTA, ofertaActivacionVigente } from '@/lib/config'

// setTimeout no acepta más de 2^31-1 ms (unos 24 días); si falta más, revisa al cumplirse ese plazo.
const MAX_TIMEOUT = 2_147_483_647

/**
 * Avisa a React cuando vence la oferta (con la página abierta) y al volver a una pestaña
 * suspendida, donde el temporizador pudo quedar atrasado.
 */
function suscribir(avisar: () => void) {
  const falta = OFERTA_ACTIVACION_HASTA - Date.now() + 1000
  const t = falta > 0 ? setTimeout(avisar, Math.min(falta, MAX_TIMEOUT)) : undefined
  document.addEventListener('visibilitychange', avisar)
  return () => {
    clearTimeout(t)
    document.removeEventListener('visibilitychange', avisar)
  }
}

/** Vigencia de la oferta: `enBuild` en el HTML y la hidratación; después, la fecha del visitante. */
export function useOfertaVigente(enBuild: boolean) {
  return useSyncExternalStore(suscribir, () => ofertaActivacionVigente(), () => enBuild)
}

/**
 * Muestra `oferta` mientras la activación gratis está vigente y `normal` después.
 * El HTML del build se pinta con `enBuild` (la fecha del build, calculada en el server component
 * que lo usa); en el navegador manda la fecha del visitante, así el cartel se retira solo el
 * 16 de noviembre aunque nadie vuelva a desplegar.
 */
export function SegunOferta({
  enBuild,
  oferta,
  normal = null,
}: {
  enBuild: boolean
  oferta: React.ReactNode
  normal?: React.ReactNode
}) {
  const vigente = useOfertaVigente(enBuild)
  return <>{vigente ? oferta : normal}</>
}
