'use client'

import { useEffect, useState } from 'react'

/**
 * El rótulo "Atendiendo hoy · horario" se calcula en el cliente: el
 * export estático no sabe qué día es. Antes de hidratar muestra el
 * horario semanal corto, que siempre es correcto.
 */
/** Día (0 = domingo) y minuto del día en Santiago, sin importar la zona del visitante. */
function ahoraChile() {
  const p = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Santiago', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date())
  const v = (t: string) => p.find((x) => x.type === t)?.value ?? '0'
  const dia = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(v('weekday'))
  return { dia, min: (Number(v('hour')) % 24) * 60 + Number(v('minute')) }
}

export default function HorarioHoy({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const [txt, setTxt] = useState('Lun a vie 10:00 a 20:30 · Sáb 10:00 a 19:30')
  useEffect(() => {
    const { dia, min } = ahoraChile()
    if (dia === 0) {
      setTxt('Domingos y festivos · consulta por WhatsApp')
      return
    }
    const cierra = dia === 6 ? 19 * 60 + 30 : 20 * 60 + 30
    const horas = dia === 6 ? '10:00 a 19:30' : '10:00 a 20:30'
    setTxt(min >= 600 && min < cierra ? `Abierto ahora · hoy ${horas}` : `Horario de hoy · ${horas}`)
  }, [])
  return (
    <span className={className} style={style}>
      {txt}
    </span>
  )
}
