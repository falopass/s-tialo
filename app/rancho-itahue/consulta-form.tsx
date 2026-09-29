'use client'

import { useId } from 'react'
import { waLink } from './content'

/**
 * Formulario sin backend: arma el mensaje y abre WhatsApp. No se guarda
 * nada — es solo una plantilla de consulta para el cliente.
 */
export function ConsultaForm({
  motivos,
  displayClassName = '',
}: {
  motivos: readonly string[]
  displayClassName?: string
}) {
  const uid = useId()
  const id = (name: string) => `${uid}-${name}`

  const field =
    'w-full rounded-xl px-4 text-base bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E20411]'
  const input = `h-12 ${field}`
  const inputStyle = { border: '1.5px solid #8A8A84', color: '#2C2C28' } as const
  const label = 'block text-sm font-semibold mb-1.5'

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const nombre = String(fd.get('nombre') ?? '').trim()
    const motivo = String(fd.get('motivo') ?? '')
    const fecha = String(fd.get('fecha') ?? '')
    const personas = String(fd.get('personas') ?? '').trim()
    const mensaje = String(fd.get('mensaje') ?? '').trim()

    const lines = [`Hola, soy ${nombre}. Quiero consultar por: ${motivo}.`]
    if (fecha) {
      const [y, m, d] = fecha.split('-')
      lines.push(`Fecha tentativa: ${d}-${m}-${y}`)
    }
    if (personas) lines.push(`Personas: ${personas}`)
    if (mensaje) lines.push(mensaje)

    const url = waLink(lines.join('\n'))
    // Con 'noopener' window.open devuelve siempre null: se corta el opener a mano.
    const w = window.open(url, '_blank')
    if (w) w.opener = null
    else window.location.href = url
  }

  return (
    <div>
      <h3
        className={`${displayClassName} text-2xl font-extrabold tracking-tight`}
        style={{ color: '#2C2C28' }}
      >
        Consulta rápida
      </h3>
      <p className="mt-1 text-sm" style={{ color: '#4A4A44' }}>
        Completa y se abre WhatsApp con tu mensaje listo. No guardamos tus datos.
      </p>
      <form onSubmit={onSubmit} className="mt-5 space-y-4">
        <div>
          <label htmlFor={id('nombre')} className={label} style={{ color: '#2C2C28' }}>
            Nombre
          </label>
          <input
            id={id('nombre')}
            name="nombre"
            type="text"
            required
            autoComplete="name"
            className={input}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor={id('motivo')} className={label} style={{ color: '#2C2C28' }}>
            Motivo
          </label>
          <select
            id={id('motivo')}
            name="motivo"
            required
            defaultValue=""
            className={input}
            style={inputStyle}
          >
            <option value="" disabled>
              Elige una opción
            </option>
            {motivos.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-3">
          <div>
            <label htmlFor={id('fecha')} className={label} style={{ color: '#2C2C28' }}>
              Fecha tentativa
            </label>
            <input
              id={id('fecha')}
              name="fecha"
              type="date"
              className={input}
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor={id('personas')} className={label} style={{ color: '#2C2C28' }}>
              N° de personas
            </label>
            <input
              id={id('personas')}
              name="personas"
              type="number"
              min={1}
              inputMode="numeric"
              className={input}
              style={inputStyle}
            />
          </div>
        </div>
        <div>
          <label htmlFor={id('mensaje')} className={label} style={{ color: '#2C2C28' }}>
            Mensaje
          </label>
          <textarea
            id={id('mensaje')}
            name="mensaje"
            rows={3}
            className={`${field} py-3`}
            style={inputStyle}
          />
        </div>
        <button
          type="submit"
          className="h-12 w-full rounded-full text-sm font-bold transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E20411]"
          style={{ backgroundColor: '#E20411', color: '#fff' }}
        >
          Enviar por WhatsApp
        </button>
      </form>
    </div>
  )
}
