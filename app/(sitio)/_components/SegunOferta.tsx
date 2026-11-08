'use client'

import { useSyncExternalStore } from 'react'
import { ofertaActivacionVigente } from '@/lib/config'

const sinSuscripcion = () => () => {}

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
  const vigente = useSyncExternalStore(sinSuscripcion, () => ofertaActivacionVigente(), () => enBuild)
  return <>{vigente ? oferta : normal}</>
}
