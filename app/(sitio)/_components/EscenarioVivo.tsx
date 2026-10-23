'use client'

import dynamic from 'next/dynamic'
import type { FotoEscenario } from './EscenarioCanvas'

/** Carga el canvas después de la hidratación, para que no compita con el LCP (el titular y el póster). */
const EscenarioCanvas = dynamic(() => import('./EscenarioCanvas'), { ssr: false })

export function EscenarioVivo({ fotos }: { fotos: FotoEscenario[] }) {
  return <EscenarioCanvas fotos={fotos} />
}
