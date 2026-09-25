'use client'

import { useState } from 'react'
import type { Demo } from './data'

/**
 * Formulario de contacto del demo: al enviar abre WhatsApp del negocio
 * de ejemplo con el mensaje ya redactado (como haría el sitio real).
 */
export function DemoForm({ demo }: { demo: Demo }) {
  const t = demo.theme
  const [nombre, setNombre] = useState('')
  const [mensaje, setMensaje] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const text = `Hola ${demo.name}!${nombre ? ` Soy ${nombre}.` : ''} ${mensaje}`.trim()
    window.open(
      `https://wa.me/${demo.whatsapp}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  const inputStyle = {
    backgroundColor: t.paper,
    borderColor: t.line,
    borderRadius: t.radius,
    color: t.ink,
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="demo-nombre" className="block text-sm font-medium mb-1.5">
          Nombre
        </label>
        <input
          id="demo-nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          autoComplete="name"
          className="w-full border px-4 py-2.5 text-sm"
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="demo-mensaje" className="block text-sm font-medium mb-1.5">
          Mensaje
        </label>
        <textarea
          id="demo-mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Cuéntanos qué necesitas"
          rows={4}
          required
          className="w-full border px-4 py-2.5 text-sm resize-y"
          style={inputStyle}
        />
      </div>
      <button
        type="submit"
        className="w-full font-semibold text-sm px-6 py-3 transition-transform active:scale-[0.98]"
        style={{
          backgroundColor: t.accent,
          color: t.accentInk,
          borderRadius: t.radius,
        }}
      >
        Enviar por WhatsApp
      </button>
      <p className="text-xs" style={{ color: t.muted }}>
        Al enviar se abre WhatsApp con tu mensaje listo. No guardamos tus datos.
      </p>
    </form>
  )
}
