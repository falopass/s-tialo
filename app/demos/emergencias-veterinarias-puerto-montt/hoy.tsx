'use client'

import { useEffect, useState } from 'react'

/**
 * El rótulo "Atendiendo hoy · horario" se calcula en el cliente: el
 * export estático no sabe qué día es. Antes de hidratar muestra el
 * horario semanal corto, que siempre es correcto.
 */
export default function HorarioHoy({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const [txt, setTxt] = useState('Lun a vie 10:00 a 20:30 · Sáb 10:00 a 19:30')
  useEffect(() => {
    const d = new Date().getDay()
    setTxt(
      d === 0
        ? 'Domingos y festivos · consulta por WhatsApp'
        : `Atendiendo hoy · ${d === 6 ? '10:00 a 19:30' : '10:00 a 20:30'}`,
    )
  }, [])
  return (
    <span className={className} style={style}>
      {txt}
    </span>
  )
}
