'use client'

/**
 * app/demos/fonoaudiologa-karen-oyarce/chrome.tsx
 * Piezas con estado del navegador para el demo de Karen Oyarce.
 */

import { useEffect, useState } from 'react'

export const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#areas', label: 'Áreas' },
  { href: '#agendar', label: 'Agendar' },
  { href: '#ubicacion', label: 'Ubicación' },
]

/* Horario publicado en AgendaPro (hora Chile): Lun–Vie 10–13, Sáb 10–18. */
function isOpen(d: Date) {
  const day = d.getDay()
  const h = d.getHours() + d.getMinutes() / 60
  if (day >= 1 && day <= 5) return h >= 10 && h < 13
  if (day === 6) return h >= 10 && h < 18
  return false
}

export function OpenBadge() {
  const [open, setOpen] = useState<boolean | null>(null)

  useEffect(() => {
    const compute = () =>
      setOpen(
        isOpen(
          new Date(
            new Date().toLocaleString('en-US', {
              timeZone: 'America/Santiago',
            }),
          ),
        ),
      )
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
          ? { background: 'rgba(74,222,128,0.22)', color: '#0B4A44' }
          : { background: 'rgba(14,42,40,0.08)', color: '#4A615E' }
      }
    >
      <span
        className="size-1.5 rounded-full"
        style={{ background: open ? '#0D8A6A' : '#4A615E' }}
      />
      {open ? 'En horario de atención' : 'Fuera de horario'}
    </span>
  )
}
