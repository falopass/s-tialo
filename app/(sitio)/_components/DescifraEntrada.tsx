'use client'

import { useEffect, useRef } from 'react'

const RAMPA = '.:-=+*#%@'
const DURACION = 950

/**
 * Al cargar, el texto se arma desde los caracteres de la rampa ASCII, de izquierda a
 * derecha: el titular se está construyendo frente al visitante, igual que la web del
 * escenario. Una sola pasada. Si React hidrata tarde, el texto ya quedó legible y no
 * se desarma. Con movimiento reducido no hace nada: el texto viene listo.
 * Mientras corre, fija la altura del bloque padre para que el reordenamiento
 * de líneas no empuje la página.
 */
export function DescifraEntrada({ texto }: { texto: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (performance.now() > 1600) return
    const caja = el.parentElement
    let raf = 0
    if (caja) caja.style.minHeight = `${caja.getBoundingClientRect().height}px`
    const inicio = performance.now()
    const paso = (t: number) => {
      const avance = Math.min(1, (t - inicio) / DURACION)
      const fijas = Math.floor(avance * texto.length)
      el.textContent =
        texto.slice(0, fijas) +
        texto.slice(fijas).replace(/\S/g, () => RAMPA[Math.floor(Math.random() * RAMPA.length)])
      if (avance < 1) {
        raf = requestAnimationFrame(paso)
      } else {
        el.textContent = texto
        if (caja) caja.style.minHeight = ''
      }
    }
    raf = requestAnimationFrame(paso)
    return () => {
      cancelAnimationFrame(raf)
      el.textContent = texto
      if (caja) caja.style.minHeight = ''
    }
  }, [texto])

  return (
    <span ref={ref} aria-hidden="true">
      {texto}
    </span>
  )
}
