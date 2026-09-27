'use client'

import { useEffect } from 'react'

/**
 * Los demos usan <Image> sin priority, así que el navegador las deja en lazy y en el celular
 * (o al abrir el link desde WhatsApp) las secciones se ven vacías por varios segundos — es uno
 * de los bugs que reportó Diego. Aquí se fuerzan a cargar de inmediato: son solo 5 fotos webp
 * por demo, así que el costo es menor que el hueco visual.
 */
export default function EagerImages() {
  useEffect(() => {
    const forzar = () => {
      document.querySelectorAll<HTMLImageElement>('img[loading="lazy"]').forEach((img) => {
        img.loading = 'eager'
        if (img.dataset.src && !img.src) img.src = img.dataset.src
        // si el navegador ya lo había diferido, forzamos la carga reevaluando el src
        if (!img.complete && img.src) {
          const s = img.src
          img.src = s
        }
      })
    }
    forzar()
    const t = window.setTimeout(forzar, 1200)
    return () => window.clearTimeout(t)
  }, [])
  return null
}
