'use client'

import { useEffect, useState } from 'react'
import { HORARIO_RANGOS } from './content'

/** Minutos del día en horario de Chile (America/Santiago). */
function chileNow() {
  const parts = new Intl.DateTimeFormat('es-CL', {
    timeZone: 'America/Santiago',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(new Date())
  const wd = parts.find((p) => p.type === 'weekday')?.value ?? ''
  const hh = Number(parts.find((p) => p.type === 'hour')?.value ?? 0)
  const mm = Number(parts.find((p) => p.type === 'minute')?.value ?? 0)
  const dayMap: Record<string, number> = {
    dom: 0, lun: 1, mar: 2, mié: 3, jue: 4, vie: 5, sáb: 6,
    'dom.': 0, 'lun.': 1, 'mar.': 2, 'mié.': 3, 'jue.': 4, 'vie.': 5, 'sáb.': 6,
  }
  return { day: dayMap[wd] ?? new Date().getDay(), mins: hh * 60 + mm }
}

const fmtHora = (mins: number) =>
  `${Math.floor(mins / 60)}:${String(mins % 60).padStart(2, '0')}`

function estado() {
  const { day, mins } = chileNow()
  const hoy = HORARIO_RANGOS[day]
  if (hoy && mins >= hoy[0] && mins < hoy[1]) {
    return { abierto: true, texto: `Abierto ahora · cierra ${fmtHora(hoy[1])}` }
  }
  if (hoy && mins < hoy[0]) {
    return { abierto: false, texto: `Cerrado · abre hoy a las ${fmtHora(hoy[0])}` }
  }
  for (let d = 1; d <= 7; d++) {
    const prox = HORARIO_RANGOS[(day + d) % 7]
    if (prox) {
      const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
      const nombre = dias[(day + d) % 7]
      return {
        abierto: false,
        texto: d === 1 ? `Cerrado · abre mañana ${fmtHora(prox[0])}` : `Cerrado · abre el ${nombre} ${fmtHora(prox[0])}`,
      }
    }
  }
  return { abierto: false, texto: 'Cerrado' }
}

/**
 * Badge «abierto ahora» según el horario real publicado en Google Maps.
 * SSR muestra una versión neutra; en cliente se calcula con la hora de Chile.
 */
export default function OpenBadge() {
  const [est, setEst] = useState<{ abierto: boolean; texto: string } | null>(null)
  useEffect(() => {
    setEst(estado())
    const t = setInterval(() => setEst(estado()), 60_000)
    return () => clearInterval(t)
  }, [])

  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold"
      style={{
        backgroundColor: est?.abierto ? 'rgba(87,166,114,0.16)' : 'rgba(246,239,225,0.1)',
        color: est ? (est.abierto ? '#8FD9A8' : '#F6EFE1') : 'rgba(246,239,225,0.85)',
        border: `1px solid ${est?.abierto ? 'rgba(143,217,168,0.4)' : 'rgba(246,239,225,0.28)'}`,
      }}
    >
      <span
        className="inline-block w-2 h-2 rounded-full"
        style={{ backgroundColor: est?.abierto ? '#57A672' : '#D6693B' }}
        aria-hidden="true"
      />
      {est ? est.texto : 'Lun–vie 9:00–18:30 · sáb 9:00–13:15'}
    </span>
  )
}
