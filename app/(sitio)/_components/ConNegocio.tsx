'use client'

import { useEffect, useState } from 'react'
import { useNegocio } from '../_lib/negocio'

/**
 * Texto que cambia si el visitante escribió el nombre de su negocio en el hero: el relato
 * (pasos, cierre) pasa a ser sobre su negocio. Sin nombre, se muestra `sin` tal cual.
 * En el servidor y en la primera hidratación siempre se pinta `sin`.
 */
export function ConNegocio({
  sin,
  antes,
  despues,
  enfasis = true,
}: {
  sin: React.ReactNode
  antes: string
  despues: React.ReactNode
  /** El nombre en cursiva, como el resto de los énfasis del sitio. */
  enfasis?: boolean
}) {
  const negocio = useNegocio()
  if (!negocio) return <>{sin}</>
  return (
    <>
      {antes}
      {enfasis ? <em>{negocio}</em> : negocio}
      {despues}
    </>
  )
}

/** Confirmación bajo los botones del hero: muestra que el nombre ya va en el mensaje de WhatsApp. */
export function ConfirmaNegocio() {
  const negocio = useNegocio()
  const [avisado, setAvisado] = useState(negocio)

  // El aria-live anuncia el valor con pausa: no lee cada tecla que se presiona.
  useEffect(() => {
    const t = setTimeout(() => setAvisado(negocio), 700)
    return () => clearTimeout(t)
  }, [negocio])

  return (
    <p aria-live="polite" className="mt-4 min-h-[1.5em] text-[15px] text-(--s-ceniza)">
      {avisado && (
        <>
          Listo: tu mensaje de WhatsApp ya dice <span className="text-(--s-crema)">“{avisado}”</span>.
        </>
      )}
    </p>
  )
}
