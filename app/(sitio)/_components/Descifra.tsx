'use client'

import { useRef } from 'react'

const RAMPA = '.:-=+*#%@'
const DURACION = 280

/**
 * Al pasar el mouse, la palabra se descifra en caracteres de la rampa ASCII antes de asentarse.
 * Qué comunica: respuesta a la acción, en el mismo idioma que el ASCII del hero.
 * Solo con mouse y sin movimiento reducido; dura menos de 300 ms. El ancho no salta:
 * una copia invisible reserva el espacio y el texto animado va encima.
 */
export function Descifra({ texto }: { texto: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const corriendo = useRef(false)

  function iniciar(e: React.PointerEvent) {
    if (e.pointerType !== 'mouse' || corriendo.current || !ref.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    corriendo.current = true
    const el = ref.current
    const inicio = performance.now()
    const paso = (t: number) => {
      const avance = Math.min(1, (t - inicio) / DURACION)
      const fijas = Math.floor(avance * texto.length)
      el.textContent =
        texto.slice(0, fijas) +
        texto
          .slice(fijas)
          .replace(/\S/g, () => RAMPA[Math.floor(Math.random() * RAMPA.length)])
      if (avance < 1) requestAnimationFrame(paso)
      else {
        el.textContent = texto
        corriendo.current = false
      }
    }
    requestAnimationFrame(paso)
  }

  return (
    <span className="relative inline-block" onPointerEnter={iniciar}>
      <span className="invisible">{texto}</span>
      <span ref={ref} aria-hidden="true" className="absolute inset-0 whitespace-nowrap">
        {texto}
      </span>
    </span>
  )
}
