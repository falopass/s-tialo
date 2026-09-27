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
    const calentar = () => {
      document.querySelectorAll<HTMLImageElement>('img').forEach((img) => {
        const src = img.currentSrc || img.src
        if (!src || img.complete) return
        const pre = new Image()
        pre.decoding = 'async'
        pre.src = src
      })
    }
    calentar()
    const t1 = window.setTimeout(calentar, 1500)
    const t2 = window.setTimeout(calentar, 3500)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [])
  return null
}
