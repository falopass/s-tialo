'use client'

/**
 * app/demos/family-gym-san-clemente/chrome.tsx
 * Piezas con estado del navegador para el demo de Family Gym.
 */

import { useEffect, useState } from 'react'

export const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#planes', label: 'Planes' },
  { href: '#club', label: 'El club' },
  { href: '#ubicacion', label: 'Ubicación' },
]

/* Horario publicado en Instagram: lunes a viernes 8:30–21:00 (hora Chile). */
const OPEN_HOUR = 8.5
const CLOSE_HOUR = 21

export function OpenBadge() {
  const [open, setOpen] = useState<boolean | null>(null)

  useEffect(() => {
    const compute = () => {
      const now = new Date(
        new Date().toLocaleString('en-US', { timeZone: 'America/Santiago' }),
      )
      const day = now.getDay()
      const h = now.getHours() + now.getMinutes() / 60
      setOpen(day >= 1 && day <= 5 && h >= OPEN_HOUR && h < CLOSE_HOUR)
    }
    compute()
    const t = setInterval(compute, 60_000)
    return () => clearInterval(t)
  }, [])

  if (open === null) return null

  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.14em] uppercase"
      style={
        open
          ? { background: 'rgba(74,222,128,0.18)', color: '#9DEDBB' }
          : { background: 'rgba(255,255,255,0.12)', color: '#CFC6E8' }
      }
    >
      <span
        className="size-1.5 rounded-full"
        style={{ background: open ? '#4ADE80' : '#CFC6E8' }}
      />
      {open ? 'Abierto ahora' : 'Cerrado ahora'}
    </span>
  )
}
