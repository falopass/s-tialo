'use client'

/**
 * Puerta corredera de mueble que descorre la foto al entrar en pantalla.
 * Cliente porque la puerta vive dentro del marco con overflow:hidden
 * (necesario para recortarla al deslizarse) y ahí `view()` de CSS mediría
 * contra el marco, no contra el viewport. Sin JS no se monta: la foto
 * queda visible igual.
 */
import { useEffect, useRef, useState } from 'react'

const VETA = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='42'%3E%3Cg fill='none' stroke='%23300f04' stroke-opacity='0.5' stroke-width='1.3'%3E%3Cpath d='M0 9C24 4 48 13 72 8C84 6 90 7 96 9'/%3E%3Cpath d='M0 23C24 28 48 19 72 24C84 26 90 25 96 23'/%3E%3Cpath d='M0 37C24 32 48 41 72 36C84 34 90 35 96 37'/%3E%3C/g%3E%3C/svg%3E")`

export default function Puerta() {
  const ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOpen(true)
          io.disconnect()
        }
      },
      { threshold: 0.28, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    const salvavidas = window.setTimeout(() => setOpen(true), 2800)
    return () => {
      io.disconnect()
      window.clearTimeout(salvavidas)
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <div
      ref={ref}
      className={`mv-door absolute inset-0 z-10 ${open ? 'mv-abierta' : ''}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: '#5A3A24', backgroundImage: VETA, backgroundSize: '96px 42px' }}
      />
      <div
        className="absolute top-0 bottom-0 right-0 w-[7px]"
        style={{ backgroundColor: 'rgba(0,0,0,0.42)' }}
      />
      <div
        className="absolute right-[13px] top-1/2 -translate-y-1/2 w-[3px] h-14 rounded-full"
        style={{ backgroundColor: 'rgba(246,240,230,0.55)' }}
      />
    </div>
  )
}
