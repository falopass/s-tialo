'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { terminarTransicion } from '../_lib/transiciones'

/**
 * Comportamientos de movimiento que no necesitan un componente propio por elemento:
 * - Cierra la transición de vista cuando la ruta nueva ya está montada.
 * - Revelación de dither a color en .s-revela-color. Qué comunica: detrás de cada demo hay
 *   un negocio real. Con mouse, una máscara circular sigue al cursor; en el celular,
 *   la versión a color aparece al entrar en pantalla.
 */
export function MovimientoSitio() {
  const pathname = usePathname()

  useEffect(() => {
    terminarTransicion()
  }, [pathname])

  useEffect(() => {
    const raiz = document.querySelector<HTMLElement>('[data-sitio]')
    if (!raiz) return
    const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const conMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches

    if (conMouse && !reducir) {
      let actual: HTMLElement | null = null
      const mover = (e: PointerEvent) => {
        const el = (e.target as Element | null)?.closest<HTMLElement>('.s-revela-color') ?? null
        if (actual && actual !== el) delete actual.dataset.activo
        actual = el
        if (!el) return
        const r = el.getBoundingClientRect()
        el.style.setProperty('--s-x', `${e.clientX - r.left}px`)
        el.style.setProperty('--s-y', `${e.clientY - r.top}px`)
        el.dataset.activo = ''
      }
      const salir = () => {
        if (actual) delete actual.dataset.activo
        actual = null
      }
      raiz.addEventListener('pointermove', mover)
      raiz.addEventListener('pointerleave', salir)
      return () => {
        raiz.removeEventListener('pointermove', mover)
        raiz.removeEventListener('pointerleave', salir)
      }
    }

    const io = new IntersectionObserver(
      (entradas) => {
        for (const en of entradas) {
          if (!en.isIntersecting) continue
          ;(en.target as HTMLElement).dataset.visto = ''
          io.unobserve(en.target)
        }
      },
      { threshold: 0.6 },
    )
    raiz.querySelectorAll('.s-revela-color').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  return null
}
